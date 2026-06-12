export interface HeroContent {
  title: string;
  subtitle: string;
  primaryCta: string;
  backgroundMediaUrl: string;
}

export interface ProductCard {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  badge?: string;
  category: 'agriculture' | 'livestock' | 'recreation' | 'culture';
}

export interface GalleryItem {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
  type: 'image' | 'video';
  videoId?: string;
  description?: string;
}

export interface PersonProfile {
  id: string;
  name: string;
  role: string;
  quote: string;
  imageUrl: string;
}

export interface MapPoint {
  id: string;
  name: string;
  description: string;
  lat: number;
  lng: number;
  type: 'river' | 'park' | 'agriculture' | 'landmark' | 'sport';
}
