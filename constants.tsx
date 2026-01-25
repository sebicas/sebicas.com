import { Linkedin, Instagram, Facebook, Github, Youtube, Send } from 'lucide-react';
import { SocialLink, NavItem, Role } from './types';

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sebicas/',
    icon: Linkedin,
  },
  {
    platform: 'Instagram',
    url: 'https://www.instagram.com/sebicas',
    icon: Instagram,
  },
  {
    platform: 'Facebook',
    url: 'https://www.facebook.com/sebicas',
    icon: Facebook,
  },
  {
    platform: 'GitHub',
    url: 'https://github.com/sebicas',
    icon: Github,
  },
  {
    platform: 'YouTube',
    url: 'https://www.youtube.com/sebicastro',
    icon: Youtube,
  },
  {
    platform: 'Telegram',
    url: 'https://t.me/sebicastro',
    icon: Send,
  },
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Ventures', href: '#ventures' },
  { label: 'Blog', href: '#blog' },
];

export const ROLES: Role[] = [
  { title: 'Husband' },
  { title: 'Father' },
  { title: 'IT Enthusiast' },
  { title: 'Serial Entrepreneur' },
  { title: 'Investor' },
  { title: 'Pilot' },
];
