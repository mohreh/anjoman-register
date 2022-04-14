import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth.service';
import { Public } from './decorators/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post()
  async register(@Body() data: Record<string, unknown>) {
    const member = await this.authService.registerMember(data);
    return this.authService.login(member);
  }

  @Get()
  me(@Req() req: Request) {
    console.log(req.user);
    return req.user;
  }

  // @Public()
  @Post('verfy')
  async sendAuthenticationCode(
    @Body() { phoneNumber },
  ): Promise<{ reqId: string }> {
    const reqId = await this.authService.sendAuthenticationCode(phoneNumber);
    return { reqId };
  }

  // @Public()
  @Post('verify-then')
  verifyUser(@Req() req: Request) {
    console.log(req);
    // return this.authService.login(req.user.phoneNumber);
  }
}
