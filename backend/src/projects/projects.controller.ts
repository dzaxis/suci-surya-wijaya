import { Controller, Get, Post, Patch, Delete, Param, Body, UseGuards, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'node:path';
import { ProjectsService } from './projects.service.js';
import { CreateProjectDto, UpdateProjectDto } from './dto/create-project.dto.js';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard.js';

@Controller('projects')
export class ProjectsController {
  constructor(private projectsService: ProjectsService) {}

  @Get() findAll(){ return this.projectsService.findAll(); }
  @Get(':slug') findOne(@Param('slug') slug:string){ return this.projectsService.findBySlug(slug); }

  @UseGuards(JwtAuthGuard)
  @Post()
  @UseInterceptors(FileInterceptor('image', {
    storage: diskStorage({
      destination: './uploads',
      filename: (_req, file, cb) => cb(null, `${Date.now()}${extname(file.originalname)}`),
    }),
    limits: { fileSize: 5 * 1024 * 1024 },
    fileFilter: (_req, file, cb) => {
      if (!file.mimetype.match(/\/(jpg|jpeg|png|webp)$/)) return cb(new Error('Only image files allowed'), false);
      cb(null, true);
    },
  }))
  create(@Body() dto: CreateProjectDto, @UploadedFile() file?: Express.Multer.File){
    if (file) dto.image = `/uploads/${file.filename}`;
    return this.projectsService.create(dto as never);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  @UseInterceptors(FileInterceptor('image', {
    storage: diskStorage({ destination: './uploads', filename: (_req, file, cb) => cb(null, `${Date.now()}${extname(file.originalname)}`) }),
    limits: { fileSize: 5*1024*1024 },
  }))
  update(@Param('id') id:string, @Body() dto: UpdateProjectDto, @UploadedFile() file?: Express.Multer.File){
    if (file) dto.image = `/uploads/${file.filename}`;
    return this.projectsService.update(id, dto as never);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id') remove(@Param('id') id:string){ return this.projectsService.remove(id); }
}
