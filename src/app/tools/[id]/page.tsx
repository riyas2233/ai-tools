import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Star, ExternalLink, Users, Check, X, Tag } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolCard from '@/components/ToolCard';
import UserReviews from '@/components/UserReviews';
import ToolActions from '@/components/ToolActions';
import AffiliateButton from '@/components/AffiliateButton';
import { getToolById, aiTools } from '@/data/tools';
import { formatPrice, formatRating } from '@/lib/utils';
import { Metadata } from 'next';

interface ToolDetailPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: ToolDetailPageProps): Promise<Metadata> {
  const tool = getToolById(params.id);
  
  if (!tool) {
    return {
      title: 'Tool Not Found',
    };
  }

  return {
    title: `${tool.name} - AI Tool Review | AI Tools Directory`,
    description: tool.description,
    openGraph: {
      title: tool.name,
      description: tool.description,
      images: [tool.logo],
    },
  };
}

export default function ToolDetailPage({ params }: ToolDetailPageProps) {
  const tool = getToolById(params.id);
  
  if (!tool) {
    notFound();
  }
  // Get related tools (same category, excluding current tool)
  const relatedTools = aiTools
    .filter(t => t.category === tool.category && t.id !== tool.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tool Header */}
          <div className="bg-white rounded-2xl p-8 mb-8">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-gray-100 rounded-2xl flex items-center justify-center overflow-hidden">
                  <Image
                    src={tool.logo}
                    alt={`${tool.name} logo`}
                    width={128}
                    height={128}
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="flex-1">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                      {tool.name}
                    </h1>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <span className="text-lg font-medium text-gray-700">
                          {formatRating(tool.rating)}
                        </span>
                        <span className="text-gray-500">
                          ({tool.reviewCount.toLocaleString()} reviews)
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500">
                        <Users className="h-5 w-5" />
                        <span>{tool.reviewCount.toLocaleString()} users</span>
                      </div>
                    </div>                  </div>

                  <ToolActions tool={tool} />
                </div>

                <p className="text-gray-600 text-lg mb-6">
                  {tool.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {tool.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm font-medium text-primary-700 bg-primary-100 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Features */}
              <div className="bg-white rounded-2xl p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
                <ul className="space-y-3">
                  {tool.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pros and Cons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    Pros
                  </h3>
                  <ul className="space-y-2">
                    {tool.pros.map((pro, index) => (
                      <li key={index} className="text-gray-700 text-sm">
                        • {pro}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <X className="h-5 w-5 text-red-500" />
                    Cons
                  </h3>
                  <ul className="space-y-2">
                    {tool.cons.map((con, index) => (
                      <li key={index} className="text-gray-700 text-sm">
                        • {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Pricing */}
              <div className="bg-white rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Pricing</h3>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {formatPrice(tool.pricing.price)}
                  </div>
                  <div className="text-gray-600 capitalize mb-4">
                    {tool.pricing.model} plan
                  </div>                  {tool.pricing.hasFreeTrial && (
                    <div className="text-green-600 font-medium mb-4">
                      ✓ Free trial available
                    </div>
                  )}
                  <AffiliateButton
                    tool={tool}
                    className="w-full px-4 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium inline-block text-center"
                  >
                    Get Started
                  </AffiliateButton>
                </div>
              </div>

              {/* Use Cases */}
              <div className="bg-white rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Use Cases</h3>
                <div className="space-y-2">
                  {tool.useCases.map((useCase, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Tag className="h-4 w-4 text-primary-500" />
                      <span className="text-gray-700 text-sm">{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category */}
              <div className="bg-white rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Category</h3>
                <Link
                  href={`/categories/${tool.category.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-lg hover:bg-primary-200 transition-colors"
                >
                  {tool.category}
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            </div>          </div>

          {/* User Reviews */}
          <div className="mt-16">
            <UserReviews
              toolId={tool.id}
              toolName={tool.name}
              averageRating={tool.rating}
              totalReviews={tool.reviewCount}
            />
          </div>

          {/* Related Tools */}
          {relatedTools.length > 0 && (
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Related {tool.category} Tools
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {relatedTools.map((relatedTool) => (
                  <ToolCard key={relatedTool.id} tool={relatedTool} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
