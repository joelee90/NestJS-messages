import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';
@Injectable()
export class MessagesService {
  constructor(public messagesRepo: MessagesRepository) {}
  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }
  findAll() {
    return this.messagesRepo.findAll();
  }
  create(content: string) {
    return this.messagesRepo.create(content);
  }
}

// Create a new instance of MessagesRepository and assign it to the property on this class.
// NestJS: Dependency injection. Set up different dependencies depending on classes.
