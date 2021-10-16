import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  messagesService: MessagesService;
  constructor() {
    // DONT DO THIS ON REAL APPS.
    // USE DEPENDENCY INJECTION
    this.messagesService = new MessagesService();
  }
  @Get()
  listMessages() {
    return this.messagesService.findAll();
  }
  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    // console.log(`body ${JSON.stringify(body)}`);
    // console.log(body);
    return this.messagesService.create(body.content);
  }
  @Get('/:id')
  getMessage(@Param('id') id: string) {
    // console.log(`id ${JSON.stringify(id)}`);
    // console.log(id);
    return this.messagesService.findOne(id);
  }
}

// Decorator types: Class, Method, Argument.
// Use Pipe to validate data contained in the request.
