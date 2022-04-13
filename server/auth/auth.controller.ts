import { Controller, Get, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('')
  register() {
    return {};
  }

  @Get('')
  profile() {
    return {};
  }
}
