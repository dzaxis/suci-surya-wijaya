import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
// NOTE: jsonwebtoken adalah modul CommonJS. Dengan "type": "module",
// `import * as jwt` menghasilkan namespace yang TIDAK memiliki `verify`
// (hasilnya undefined) sehingga semua token selalu ditolak.
// Gunakan default import agar verify/sign tersedia.
import jwt from 'jsonwebtoken';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest<{ headers: Record<string, string>; user?: unknown }>();
    const auth = (req.headers as Record<string, string>)['authorization'] || (req.headers as Record<string, string>)['Authorization'];
    if (!auth) throw new UnauthorizedException('Missing token');
    const token = (auth as string).replace('Bearer ', '');
    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET || 'super-secret-jwt-key-change-in-production-32chars') as { sub: string; email: string };
      (req as unknown as { user: unknown }).user = { userId: payload.sub, email: payload.email };
      return true;
    } catch {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
