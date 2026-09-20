import { Injectable, NotFoundException } from '@nestjs/common';

interface ServiceEntity {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

@Injectable()
export class ServicesService {
  private services: ServiceEntity[] = [
    { id: '1', title: 'Construction', slug: 'construction', description: 'Pelaksanaan konstruksi gedung dan infrastruktur dengan standar presisi tinggi.', icon: 'Building2', status: 'ACTIVE', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    { id: '2', title: 'Engineering', slug: 'engineering', description: 'Solusi rekayasa teknis meliputi perencanaan struktur, sipil, dan sistem bangunan.', icon: 'DraftingCompass', status: 'ACTIVE', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    { id: '3', title: 'Project Management', slug: 'project-management', description: 'Pengelolaan proyek end-to-end dari perencanaan hingga serah terima.', icon: 'ClipboardList', status: 'ACTIVE', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    { id: '4', title: 'Maintenance', slug: 'maintenance', description: 'Layanan pemeliharaan preventif dan korektif untuk menjaga performa bangunan.', icon: 'Wrench', status: 'ACTIVE', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    { id: '5', title: 'Consultation', slug: 'consultation', description: 'Konsultasi teknis dan feasibility study untuk keputusan investasi tepat.', icon: 'Users', status: 'ACTIVE', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    { id: '6', title: 'Procurement', slug: 'procurement', description: 'Pengadaan material dan peralatan konstruksi berkualitas.', icon: 'Package', status: 'ACTIVE', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  ];

  findAll() { return this.services; }
  findBySlug(slug: string) {
    const s = this.services.find(x => x.slug === slug);
    if (!s) throw new NotFoundException('Service not found');
    return s;
  }
  create(dto: Omit<ServiceEntity, 'id' | 'createdAt' | 'updatedAt'>) {
    const entity: ServiceEntity = { id: Date.now().toString(), ...dto, status: dto.status || 'ACTIVE', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    this.services.unshift(entity);
    return entity;
  }
  update(id: string, dto: Partial<ServiceEntity>) {
    const idx = this.services.findIndex(x => x.id === id);
    if (idx === -1) throw new NotFoundException('Service not found');
    this.services[idx] = { ...this.services[idx], ...dto, updatedAt: new Date().toISOString() };
    return this.services[idx];
  }
  remove(id: string) {
    const idx = this.services.findIndex(x => x.id === id);
    if (idx === -1) throw new NotFoundException('Service not found');
    const [removed] = this.services.splice(idx, 1);
    return removed;
  }
}
