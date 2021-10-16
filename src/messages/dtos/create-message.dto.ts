// Class that describes the different properties that the request body shoud have.
// Data Transfer Object (DTO)

import { IsString } from 'class-validator';
export class CreateMessageDto {
  @IsString()
  content: string;
}

// class-transformer : takes plain object converts it into instance of a class.
// class-validator :
