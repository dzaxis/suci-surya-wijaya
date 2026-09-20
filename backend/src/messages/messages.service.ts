import { Injectable, NotFoundException } from '@nestjs/common';

interface Msg { id:string; name:string; email:string; phone:string; subject:string; message:string; status:string; createdAt:string; updatedAt:string; }

@Injectable()
export class MessagesService {
  private messages: Msg[] = [];

  create(dto: Omit<Msg,'id'|'status'|'createdAt'|'updatedAt'>){
    const m: Msg = { id: Date.now().toString(), ...dto, status:'UNREAD', createdAt:new Date().toISOString(), updatedAt:new Date().toISOString()};
    this.messages.unshift(m);
    return m;
  }
  findAll(){ return this.messages; }
  updateStatus(id:string, status:string){
    const idx=this.messages.findIndex(x=>x.id===id);
    if(idx===-1) throw new NotFoundException('Message not found');
    if(!['UNREAD','READ','REPLIED'].includes(status)) throw new NotFoundException('Invalid status');
    this.messages[idx]={...this.messages[idx], status, updatedAt:new Date().toISOString()};
    return this.messages[idx];
  }
}
