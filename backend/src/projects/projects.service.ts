import { Injectable, NotFoundException } from '@nestjs/common';

interface ProjectEntity {
  id: string; title: string; slug: string; category: string; location: string; year: string; description: string; image: string; status: string; createdAt: string; updatedAt: string;
}

@Injectable()
export class ProjectsService {
  private projects: ProjectEntity[] = [
    { id:'1', title:'Gedung Perkantoran Modern 8 Lantai', slug:'gedung-perkantoran-modern-8-lantai', category:'Construction', location:'[Lokasi]', year:'2024', description:'Proyek pembangunan gedung perkantoran dengan konsep modern minimalis.', image:'/3.jpeg', status:'ACTIVE', createdAt:new Date().toISOString(), updatedAt:new Date().toISOString() },
    { id:'2', title:'Fasilitas Industri & Warehouse', slug:'fasilitas-industri-warehouse', category:'Engineering', location:'[Lokasi]', year:'2023', description:'Pembangunan fasilitas industri dengan bentang lebar.', image:'/4.jpeg', status:'ACTIVE', createdAt:new Date().toISOString(), updatedAt:new Date().toISOString() },
    { id:'3', title:'Renovasi Kompleks Ruko Terpadu', slug:'renovasi-kompleks-ruko-terpadu', category:'Maintenance', location:'[Lokasi]', year:'2023', description:'Renovasi menyeluruh kompleks ruko.', image:'/5.jpeg', status:'ACTIVE', createdAt:new Date().toISOString(), updatedAt:new Date().toISOString() },
    { id:'4', title:'Gedung Pendidikan 4 Lantai', slug:'gedung-pendidikan-4-lantai', category:'Project Management', location:'[Lokasi]', year:'2024', description:'Manajemen konstruksi gedung pendidikan.', image:'/6.jpeg', status:'ACTIVE', createdAt:new Date().toISOString(), updatedAt:new Date().toISOString() },
    { id:'5', title:'Site Development & Infrastructure', slug:'site-development-infrastructure', category:'Construction', location:'[Lokasi]', year:'2022', description:'Pengembangan lahan dan infrastruktur.', image:'/7.jpeg', status:'ACTIVE', createdAt:new Date().toISOString(), updatedAt:new Date().toISOString() },
    { id:'6', title:'Interior & Fit-Out Kantor Premium', slug:'interior-fit-out-kantor-premium', category:'Consultation', location:'[Lokasi]', year:'2024', description:'Pekerjaan interior dan fit-out.', image:'/1.jpeg', status:'ACTIVE', createdAt:new Date().toISOString(), updatedAt:new Date().toISOString() },
  ];

  findAll(){ return this.projects; }
  findBySlug(slug:string){
    const p=this.projects.find(x=>x.slug===slug);
    if(!p) throw new NotFoundException('Project not found');
    return p;
  }
  create(dto: Omit<ProjectEntity,'id'|'createdAt'|'updatedAt'>){
    const e: ProjectEntity={ id:Date.now().toString(), ...dto, status:dto.status||'ACTIVE', createdAt:new Date().toISOString(), updatedAt:new Date().toISOString()};
    this.projects.unshift(e);
    return e;
  }
  update(id:string, dto: Partial<ProjectEntity>){
    const idx=this.projects.findIndex(x=>x.id===id);
    if(idx===-1) throw new NotFoundException('Project not found');
    this.projects[idx]={...this.projects[idx], ...dto, updatedAt:new Date().toISOString()};
    return this.projects[idx];
  }
  remove(id:string){
    const idx=this.projects.findIndex(x=>x.id===id);
    if(idx===-1) throw new NotFoundException('Project not found');
    const [r]=this.projects.splice(idx,1);
    return r;
  }
}
