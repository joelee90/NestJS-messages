import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
  Injectable,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';
@Controller('messages')
export class MessagesController {
  constructor(public messagesService: MessagesService) {}
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
  async getMessage(@Param('id') id: string) {
    // console.log(`id ${JSON.stringify(id)}`);
    // console.log(id);
    // return this.messagesService.findOne(id);
    const message = await this.messagesService.findOne(id);
    if (!message) {
      throw new NotFoundException('message not found');
    }
    return message;
  }
}

// Decorator types: Class, Method, Argument.
// Use Pipe to validate data contained in the request.
