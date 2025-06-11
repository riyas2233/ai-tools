export interface AITool {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  logo: string;
  website: string;
  affiliateLink?: string;
  category: string;
  subcategories: string[];
  tags: string[];
  pricing: {
    model: 'free' | 'freemium' | 'paid' | 'one-time' | 'subscription' | 'enterprise' | 'pay-per-use';
    price?: string | number;
    currency?: string;
    period?: string;
    hasFreeTrial?: boolean;
  };
  rating: number;
  reviewCount: number;
  features: string[];
  pros: string[];
  cons: string[];
  videoUrl?: string;
  isFeatured: boolean;
  isNew: boolean;
  useCases: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  slug: string;
  toolCount: number;
  subcategories: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  featuredImage: string;
  tags: string[];
  slug: string;
}

export interface FilterOptions {
  categories: string[];
  pricing: string[];
  tags: string[];
  useCases: string[];
}

export interface SearchFilters {
  query: string;
  category?: string;
  pricing?: string;
  tags?: string[];
  sortBy: 'name' | 'rating' | 'newest' | 'popular' | 'alphabetical';
}
