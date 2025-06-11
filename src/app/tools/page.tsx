import { Metadata } from 'next';
import { aiTools } from '@/data/tools';
import ToolCard from '@/components/ToolCard';
import { Search } from 'lucide-react';

export const metadata: Metadata = {
  title: 'All AI Tools - AI Tools Directory',
  description: 'Browse all AI tools in our comprehensive directory. Find the perfect AI solution for your needs.',
};

export default function AllToolsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
            <span className="text-2xl">🤖</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            All AI Tools
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our complete collection of AI tools. Browse through {aiTools.length} carefully curated tools across all categories.
          </p>
          <div className="mt-4">
            <span className="text-primary-600 font-semibold">{aiTools.length} tools available</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search AI tools..."
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
            />
            <button className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <Search className="h-5 w-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-8 bg-white rounded-lg px-8 py-4 shadow-sm border">
            <div>
              <div className="text-2xl font-bold text-primary-600">{aiTools.length}</div>
              <div className="text-sm text-gray-600">Total Tools</div>
            </div>
            <div className="w-px h-8 bg-gray-200"></div>
            <div>
              <div className="text-2xl font-bold text-primary-600">25</div>
              <div className="text-sm text-gray-600">Categories</div>
            </div>
            <div className="w-px h-8 bg-gray-200"></div>
            <div>
              <div className="text-2xl font-bold text-primary-600">{aiTools.filter(tool => tool.isFeatured).length}</div>
              <div className="text-sm text-gray-600">Featured</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}