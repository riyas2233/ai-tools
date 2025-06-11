import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategoryCard from '@/components/CategoryCard';
import { categories } from '@/data/categories';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Tool Categories - Browse by Use Case | AI Tools Directory',
  description: 'Explore AI tools organized by category. Find tools for coding, design, writing, marketing, and more.',
};

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Browse AI Tools by Category
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the perfect AI tools for your needs. Our comprehensive directory 
              is organized by use case and industry to help you find exactly what you&apos;re looking for.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>

          <div className="mt-16 bg-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Can&apos;t find what you&apos;re looking for?
            </h2>
            <p className="text-gray-600 mb-6">
              Submit a tool suggestion and help us grow our directory
            </p>
            <a
              href="/submit"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
            >
              Submit a Tool
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
