import { Controller, Get, Post, Patch, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { ServicesService } from './services.service.js';
import { CreateServiceDto, UpdateServiceDto } from './dto/create-service.dto.js';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard.js';

@Controller('services')
export class ServicesController {
  constructor(private servicesService: ServicesService) {}

  @Get()
  findAll() { return this.servicesService.findAll(); }

  @Get(':slug')
  findOne(@Param('slug') slug: string) { return this.servicesService.findBySlug(slug); }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() dto: CreateServiceDto) { return this.servicesService.create(dto as never); }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateServiceDto) { return this.servicesService.update(id, dto as never); }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) { return this.servicesService.remove(id); }
}
