import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolCard from '@/components/ToolCard';
import { getFeaturedTools } from '@/data/tools';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Featured AI Tools - Hand-picked by Experts',
  description: 'Discover our hand-picked selection of the best AI tools. These featured tools have been tested and recommended by our team of AI experts.',
};

export default function FeaturedToolsPage() {
  const featuredTools = getFeaturedTools();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full mb-6">
              <span className="text-lg">⭐</span>
              <span className="font-medium">Editor's Choice</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Featured AI Tools
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our team of AI experts has hand-picked these tools based on their quality, 
              innovation, and value to users. These are the tools we personally recommend.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} variant="featured" />
            ))}
          </div>

          {featuredTools.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4 text-6xl">
                ⭐
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No featured tools yet
              </h3>
              <p className="text-gray-500">
                Check back soon for our curated selection of the best AI tools
              </p>
            </div>
          )}

          <div className="mt-16 bg-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Want to see your tool featured?
            </h2>
            <p className="text-gray-600 mb-6">
              Submit your AI tool for consideration in our featured section
            </p>
            <a
              href="/submit"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
            >
              Submit Your Tool
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
