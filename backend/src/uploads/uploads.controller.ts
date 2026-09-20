import { Controller, Post, UseGuards, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'node:path';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard.js';

@Controller('uploads')
export class UploadsController {
  @UseGuards(JwtAuthGuard)
  @Post()
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({ destination:'./uploads', filename: (_req, file, cb)=>cb(null, `${Date.now()}${extname(file.originalname)}`)}),
    limits:{ fileSize:5*1024*1024 },
    fileFilter: (_req,file,cb)=>{ if(!file.mimetype.match(/\/(jpg|jpeg|png|webp)$/)) return cb(new Error('Only images'), false); cb(null,true); }
  }))
  upload(@UploadedFile() file: Express.Multer.File){
    return { url: `/uploads/${file.filename}`, filename: file.filename };
  }
}
