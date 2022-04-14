import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth.service';
import { Public } from './decorators/public.decorator';
import { AuthCodeGuard } from './guards/authentication-code.guard';
import { JwtToken } from './interfaces/jwt-payload.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('register')
  async sendAuthenticationCode(
    @Body() { phoneNumber },
  ): Promise<{ reqId: string }> {
    const reqId = await this.authService.sendAuthenticationCode(phoneNumber);
    return { reqId };
  }

  @Public()
  @Post('verify')
  @UseGuards(AuthCodeGuard)
  verifyUser(@Req() req: Request) {
    console.log(req);
    // return this.authService.login(req.user.phoneNumber);
  }
}
