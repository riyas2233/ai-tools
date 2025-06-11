import { type ClassValue, clsx } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatPrice(price: string | number | undefined): string {
  if (!price && price !== 0) return 'Free';
  if (typeof price === 'number') {
    return price === 0 ? 'Free' : `$${price}`;
  }
  return price;
}

export function formatRating(rating: number): string {
  return rating.toFixed(1);
}

export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

export function trackAffiliateClick(toolId: string, toolName: string) {
  // Track affiliate click for analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'affiliate_click', {
      tool_id: toolId,
      tool_name: toolName,
      event_category: 'monetization'
    });
  }
  
  // You can also send to other analytics services here
  console.log(`Affiliate click tracked: ${toolName} (${toolId})`);
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
