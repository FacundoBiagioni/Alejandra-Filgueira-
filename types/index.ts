export interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  link?: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface NavLink {
  href: string;
  label: string;
  isActive?: boolean;
}

export interface HeroSection {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

export interface ServiceCard {
  id: number;
  title: string;
  description: string;
  icon?: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  socialLinks: SocialLink[];
}

export interface SocialLink {
  platform: 'facebook' | 'instagram' | 'twitter' | 'linkedin';
  url: string;
  icon: string;
}

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  comment: string;
  avatar?: string;
}

export interface CommonProps {
  className?: string;
  children?: React.ReactNode;
}