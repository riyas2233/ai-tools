import Link from 'next/link';
import { Star, ExternalLink, Users } from 'lucide-react';
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
    "bg-white rounded-xl border transition-all duration-200 hover:shadow-lg hover:border-primary-200",
    {
      'p-6': variant === 'default',
      'p-8 border-2 border-primary-200 shadow-md': variant === 'featured',
      'p-4': variant === 'compact'
    }
  );

  return (
    <div className={cardClasses}>
      <div className="flex items-start gap-4">        <div className="flex-shrink-0">
          <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
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
              <h3 className="text-lg font-semibold text-gray-900 truncate">
                {tool.name}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium text-gray-700">
                    {formatRating(tool.rating)}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-gray-500">
                  <Users className="h-4 w-4" />
                  <span className="text-sm">{tool.reviewCount.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {variant === 'featured' && (
              <span className="px-2 py-1 text-xs font-medium text-primary-700 bg-primary-100 rounded-full">
                Featured
              </span>
            )}
          </div>

          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {tool.shortDescription}
          </p>

          <div className="flex flex-wrap gap-1 mb-4">
            {tool.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full"
              >
                {tag}
              </span>
            ))}
            {tool.tags.length > 3 && (
              <span className="px-2 py-1 text-xs font-medium text-gray-500">
                +{tool.tags.length - 3}
              </span>
            )}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-900">
                {formatPrice(tool.pricing.price)}
              </span>              {tool.pricing.hasFreeTrial && (
                <span className="px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
                  Free Trial
                </span>
              )}
            </div>

            <div className="flex gap-2">
              <Link
                href={`/tools/${tool.id}`}
                className="px-3 py-2 text-sm font-medium text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Details
              </Link>
              <a
                href={tool.affiliateLink || tool.website}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleAffiliateClick}
                className="px-3 py-2 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors flex items-center gap-1"
              >
                Try Now
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
