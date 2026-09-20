export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  status: "ACTIVE" | "INACTIVE";
  createdAt: string;
  updatedAt: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  location: string;
  year: string;
  description: string;
  image: string;
  status: "ACTIVE" | "INACTIVE";
  createdAt: string;
  updatedAt: string;
}

export interface CompanyProfile {
  id: string;
  companyName: string;
  description: string;
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  website: string;
  instagram?: string;
  facebook?: string;
  linkedin?: string;
  operatingHours: string;
  vision: string;
  mission: string; // JSON string or plain text with line breaks
  establishedYear?: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  status: "UNREAD" | "READ" | "REPLIED";
  createdAt: string;
}

export interface Paginated<T> {
  data: T[];
  total: number;
}

export interface Stats {
  experience: string;
  projects: string;
  commitment: string;
  support: string;
}
