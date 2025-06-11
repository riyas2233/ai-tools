'use client';

import Link from 'next/link';
import { Star, ExternalLink, Users, Sparkles, TrendingUp } from 'lucide-react';
import { AITool } from '@/types';
import { formatPrice, formatRating, trackAffiliateClick, cn } from '@/lib/utils';
import OptimizedImage from './OptimizedImage';

interface ToolCardProps {
  tool: AITool;
  variant?: 'default' | 'featured' | 'compact';
}

export default function ToolCard({ tool, variant = 'default' }: ToolCardProps) {
  const handleAffiliateClick = () => {
    trackAffiliateClick(tool.id, tool.name);
  };

  const cardClasses = cn(
    "glass-dark border border-gray-800/50 rounded-xl transition-all duration-300 hover:border-gray-700/50 group relative overflow-hidden",
    {
      'p-6': variant === 'default',
      'p-8 border-2 border-blue-500/20 shadow-xl': variant === 'featured',
      'p-4': variant === 'compact'
    }
  );

  return (
    <div className={cn(cardClasses, "transform transition-all duration-300 hover:-translate-y-2 hover:scale-105")}>
      {/* Gradient overlay for featured cards */}
      {variant === 'featured' && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
      
      {/* Trending indicator */}
      {tool.isFeatured && (
        <div className="absolute top-4 right-4 z-10">
          <div className="flex items-center gap-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            <TrendingUp className="h-3 w-3" />
            Featured
          </div>
        </div>
      )}
      
      <div className="relative z-10">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-gray-800/50 rounded-xl flex items-center justify-center overflow-hidden border border-gray-700/50 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
              <OptimizedImage
                src={tool.logo}
                alt={`${tool.name} logo`}
                width={64}
                height={64}
                className="object-cover rounded-xl"
                fallbackText={tool.name.substring(0, 2)}
              />
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-lg font-semibold text-gray-100 truncate group-hover:text-blue-400 transition-colors">
                  {tool.name}
                </h3>
                <div className="flex items-center gap-3 mt-1">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium text-gray-300">
                      {formatRating(tool.rating)}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-400">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">{tool.reviewCount.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {tool.isNew && (
                <div className="flex items-center gap-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                  <Sparkles className="h-3 w-3" />
                  New
                </div>
              )}
            </div>

            <p className="text-gray-400 text-sm mb-3 line-clamp-2">
              {tool.shortDescription}
            </p>

            <div className="flex flex-wrap gap-1 mb-4">
              {(tool.tags || tool.subcategories || []).slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs font-medium text-gray-300 bg-gray-800/50 border border-gray-700/50 rounded-full hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
                >
                  {tag}
                </span>
              ))}
              {(tool.tags || tool.subcategories || []).length > 3 && (
                <span className="px-2 py-1 text-xs font-medium text-gray-500">
                  +{(tool.tags || tool.subcategories || []).length - 3}
                </span>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-100">
                  {formatPrice(tool.pricing.price)}
                </span>
                {tool.pricing.hasFreeTrial && (
                  <span className="px-2 py-1 text-xs font-medium text-green-400 bg-green-500/20 border border-green-500/30 rounded-full">
                    Free Trial
                  </span>
                )}
              </div>

              <div className="flex gap-2">
                <div className="transition-all duration-300 hover:scale-105 active:scale-95">
                  <Link
                    href={`/tools/${tool.id}`}
                    className="px-3 py-2 text-sm font-medium text-gray-300 border border-gray-700/50 rounded-lg hover:bg-gray-800/50 hover:border-gray-600/50 transition-all duration-200"
                  >
                    Details
                  </Link>
                </div>
                <div className="transition-all duration-300 hover:scale-105 active:scale-95">
                  <a
                    href={tool.affiliateLink || tool.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleAffiliateClick}
                    className="px-3 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center gap-1 shadow-lg hover:shadow-blue-500/25"
                  >
                    Try Now
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
