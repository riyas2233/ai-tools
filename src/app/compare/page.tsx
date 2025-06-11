import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ComparisonTool from '@/components/ComparisonTool';
import { aiTools } from '@/data/tools';

export const metadata: Metadata = {
  title: 'Compare AI Tools | AI Tools Directory',
  description: 'Compare features, pricing, and ratings of popular AI tools side by side to make informed decisions.',
  keywords: 'AI tools comparison, compare AI software, AI tool features, AI pricing comparison',
};

export default function ComparePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Compare AI Tools
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Make informed decisions by comparing features, pricing, and user ratings of popular AI tools side by side.
            </p>
          </div>

          <ComparisonTool availableTools={aiTools} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
