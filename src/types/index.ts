export interface Project {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Piling' | 'Institutional' | 'Infrastructure';
  location: string;
  client: string;
  rating: number;
  reviewsCount: number;
  specs: {
    area: string;
    duration: string;
    scope: string;
    rigsUsed?: string;
    status: 'Completed' | 'Ongoing' | 'Upcoming';
  };
  priceRange?: string;
  description: string;
  keyFeatures: string[];
  mainImage: string;
  galleryImages: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  stats: string;
  icon: string;
  equipment: string[];
  deliverables: string[];
  image: string;
}

export interface HotspotItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  statsValue: string;
  statsLabel: string;
  bgImage: string;
  foregroundTag: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientRole: string;
  company: string;
  avatar: string;
  rating: number;
  quote: string;
  projectDelivered: string;
}
