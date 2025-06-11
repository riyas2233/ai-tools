import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Category } from '@/types';
import { cn } from '@/lib/utils';

interface CategoryCardProps {
  category: Category;
  variant?: 'default' | 'compact';
}

export default function CategoryCard({ category, variant = 'default' }: CategoryCardProps) {
  const isCompact = variant === 'compact';

  return (
    <div className="transform transition-all duration-300 hover:-translate-y-2 hover:scale-105">
      <Link
        href={`/categories/${category.slug}`}
        className={cn(
          "block glass-dark border border-gray-800/50 rounded-xl transition-all duration-300 hover:border-gray-700/50 group relative overflow-hidden",
          isCompact ? "p-4" : "p-6"
        )}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative z-10 text-center">
          <div className={cn(
            "mx-auto rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-gray-700/50 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3",
            isCompact ? "w-12 h-12 text-2xl" : "w-16 h-16 text-3xl"
          )}>
            <span>{category.icon}</span>
          </div>
          
          <h3 className={cn(
            "font-semibold text-gray-100 mb-2 group-hover:text-blue-400 transition-colors",
            isCompact ? "text-sm" : "text-lg"
          )}>
            {category.name}
          </h3>
          
          <p className={cn(
            "text-gray-400 mb-4 line-clamp-2",
            isCompact ? "text-xs" : "text-sm"
          )}>
            {category.description}
          </p>
          
          <div className="flex items-center justify-center gap-2 text-blue-400">
            <span className={cn(
              "font-medium",
              isCompact ? "text-xs" : "text-sm"
            )}>
              {category.toolCount} tools
            </span>
            <ArrowRight className={cn(
              "transition-transform group-hover:translate-x-1", 
              isCompact ? "w-3 h-3" : "w-4 h-4"
            )} />
          </div>
        </div>
      </Link>
    </div>
  );
}
