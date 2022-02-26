import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authServices: AuthService) {}

  @Post('local/signin')
  signinLocal(@Body() dto: AuthDto) {
    return this.authServices.signinLocal(dto);
  }

  @Post('local/signup')
  signupLocal(@Body() dto: AuthDto) {
    return this.authServices.signupLocal(dto);
  }
}
