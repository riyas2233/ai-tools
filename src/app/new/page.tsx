import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolCard from '@/components/ToolCard';
import { getNewTools } from '@/data/tools';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'New AI Tools - Latest Additions',
  description: 'Discover the latest AI tools added to our directory. Stay up-to-date with the newest innovations in artificial intelligence.',
};

export default function NewToolsPage() {
  const newTools = getNewTools();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full mb-6">
              <span className="text-lg">🆕</span>
              <span className="font-medium">Fresh Additions</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              New AI Tools
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stay ahead of the curve with the latest AI tools added to our directory. 
              Discover cutting-edge innovations and emerging technologies in AI.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {newTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>

          {newTools.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4 text-6xl">
                🆕
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No new tools recently
              </h3>
              <p className="text-gray-500 mb-6">
                Check back soon for the latest AI tool additions
              </p>
              <a
                href="/categories"
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
              >
                Browse All Tools
              </a>
            </div>
          )}

          <div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Never Miss a New Tool
            </h2>
            <p className="text-primary-100 mb-6">
              Subscribe to our newsletter and be the first to know about new AI tools
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-6 py-3 bg-white text-primary-600 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
