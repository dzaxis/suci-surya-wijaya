import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { AuthModule } from './auth/auth.module.js';
import { CompanyModule } from './company/company.module.js';
import { ServicesModule } from './services/services.module.js';
import { ProjectsModule } from './projects/projects.module.js';
import { MessagesModule } from './messages/messages.module.js';
import { UploadsModule } from './uploads/uploads.module.js';

@Module({
  imports: [AuthModule, CompanyModule, ServicesModule, ProjectsModule, MessagesModule, UploadsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
