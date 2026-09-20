import { Controller, Get, Put, Body, UseGuards } from '@nestjs/common';
import { CompanyService } from './company.service.js';
import { UpdateCompanyDto } from './dto/update-company.dto.js';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard.js';

@Controller('company')
export class CompanyController {
  constructor(private companyService: CompanyService) {}

  @Get()
  findOne() {
    return this.companyService.findOne();
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  update(@Body() dto: UpdateCompanyDto) {
    return this.companyService.update(dto);
  }
}
