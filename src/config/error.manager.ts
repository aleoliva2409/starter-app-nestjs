import { HttpException, HttpStatus } from '@nestjs/common';

interface IErrorManagerConstruct {
  type: keyof typeof HttpStatus;
  message: string;
}

export class ErrorManager extends Error {
  constructor({ type, message }: IErrorManagerConstruct) {
    super(`${type} :: ${message}`);
  }

  public static createSignatureError(message: string) {
    const name = message.split(' :: ')[0];

    console.log('name', name);
    if (name) {
      throw new HttpException(message, HttpStatus[name]);
    } else {
      throw new HttpException(message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
