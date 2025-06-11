import Link from 'next/link';
import { Category } from '@/types';
import { cn } from '@/lib/utils';

interface CategoryCardProps {
  category: Category;
  variant?: 'default' | 'compact';
}

export default function CategoryCard({ category, variant = 'default' }: CategoryCardProps) {
  const isCompact = variant === 'compact';

  return (
    <Link
      href={`/categories/${category.slug}`}
      className={cn(
        "block bg-white rounded-xl border border-gray-200 transition-all duration-200 hover:shadow-lg hover:border-primary-200 hover:scale-105",
        isCompact ? "p-4" : "p-6"
      )}
    >
      <div className="text-center">
        <div className={cn(
          "mx-auto rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center mb-4",
          isCompact ? "w-12 h-12 text-2xl" : "w-16 h-16 text-3xl"
        )}>
          <span>{category.icon}</span>
        </div>
        
        <h3 className={cn(
          "font-semibold text-gray-900 mb-2",
          isCompact ? "text-sm" : "text-lg"
        )}>
          {category.name}
        </h3>
        
        <p className={cn(
          "text-gray-600 mb-3 line-clamp-2",
          isCompact ? "text-xs" : "text-sm"
        )}>
          {category.description}
        </p>
        
        <div className="flex items-center justify-center gap-2 text-primary-600">
          <span className={cn(
            "font-medium",
            isCompact ? "text-xs" : "text-sm"
          )}>
            {category.toolCount} tools
          </span>
          <svg 
            className={cn("transition-transform group-hover:translate-x-1", isCompact ? "w-3 h-3" : "w-4 h-4")} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
