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
  category: 'agriculture' | 'livestock';
}

export interface GalleryItem {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
  type: 'image' | 'video';
}
