import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

// In-memory user for demo; replace with Prisma when DB connected
const DEMO_USER = {
  id: '1',
  email: 'admin@sucisuryawijaya.co.id',
  // bcrypt hash for 'admin123'
  passwordHash: '$2b$10$skR3V7AljifvMNHGSS9FLulLuQ58udFi5nvalwcebmA7/.5IXTOu6',
  name: 'Admin',
};

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async validateUser(email: string, password: string) {
    if (email !== DEMO_USER.email) return null;
    const match = await bcrypt.compare(password, DEMO_USER.passwordHash);
    if (!match) return null;
    return { id: DEMO_USER.id, email: DEMO_USER.email, name: DEMO_USER.name };
  }

  async login(email: string, password: string) {
    const user = await this.validateUser(email, password);
    if (!user) throw new UnauthorizedException('Email atau password salah');
    const payload = { sub: user.id, email: user.email };
    return {
      accessToken: this.jwtService.sign(payload),
      user,
    };
  }

  async me(user: { userId: string; email: string }) {
    return { id: user.userId, email: user.email, name: 'Admin' };
  }
}
