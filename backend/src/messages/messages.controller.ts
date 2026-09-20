import { Controller, Get, Post, Patch, Param, Body, UseGuards } from '@nestjs/common';
import { MessagesService } from './messages.service.js';
import { CreateMessageDto, UpdateMessageStatusDto } from './dto/create-message.dto.js';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard.js';

@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}

  @Post() create(@Body() dto: CreateMessageDto){ return this.messagesService.create(dto as never); }

  @UseGuards(JwtAuthGuard)
  @Get() findAll(){ return this.messagesService.findAll(); }

  @UseGuards(JwtAuthGuard)
  @Patch(':id/status') updateStatus(@Param('id') id:string, @Body() dto: UpdateMessageStatusDto){ return this.messagesService.updateStatus(id, dto.status); }
}
