import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthDto } from './dto';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const users = require('../users.json');

@Injectable()
export class AuthService {
  signinLocal(dto: AuthDto) {
    const user = users.find((i) => i.email === dto.email);
    if (!user) throw new UnauthorizedException('email or password is wrong');
    if (user.password !== dto.password)
      throw new UnauthorizedException('email or password is wrong');
    return user;
  }
  signupLocal(dto: AuthDto) {}
}
