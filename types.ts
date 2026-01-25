import { LucideIcon } from 'lucide-react';

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Role {
  title: string;
}
