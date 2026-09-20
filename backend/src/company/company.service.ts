import { Injectable } from '@nestjs/common';

@Injectable()
export class CompanyService {
  private company = {
    id: '1',
    companyName: 'CV. Suci Surya Wijaya',
    description:
      'CV. Suci Surya Wijaya merupakan perusahaan yang berkomitmen memberikan solusi profesional dengan mengedepankan kualitas, ketepatan, integritas, dan kepuasan klien.',
    address: 'Jl. Lingkungan Margahayu RT.025 RW.009, Kel. Cicurug, Kec. Majalengka, Kab. Majalengka, Jawa Barat',
    phone: '[Nomor Telepon]',
    whatsapp: '[Nomor WhatsApp]',
    email: '[Email Perusahaan]',
    website: 'www.sucisuryawijaya.co.id',
    instagram: '#',
    facebook: '#',
    linkedin: '#',
    operatingHours: 'Senin - Sabtu, 08.00 - 17.00 WIB',
    vision: 'Menjadi perusahaan yang terpercaya dalam memberikan solusi profesional berkualitas dengan standar kerja yang tinggi.',
    mission: '01|Mengutamakan kualitas.\n02|Memberikan pelayanan profesional.\n03|Mengutamakan ketepatan waktu.\n04|Menjaga integritas dan kepercayaan pelanggan.',
    establishedYear: '20XX',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  findOne() {
    return this.company;
  }

  update(dto: Partial<typeof this.company>) {
    this.company = { ...this.company, ...dto, updatedAt: new Date().toISOString() };
    return this.company;
  }
}
