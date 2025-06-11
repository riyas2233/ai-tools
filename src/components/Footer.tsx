import Link from 'next/link';
import { Github, Twitter, Linkedin, Mail, Sparkles } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: 'Browse Tools', href: '/categories' },
      { name: 'New Tools', href: '/new' },
      { name: 'Featured', href: '/featured' },
      { name: 'Submit Tool', href: '/submit' },
    ],
    categories: [
      { name: 'AI Agents', href: '/categories/ai-agents' },
      { name: 'ChatBots', href: '/categories/chatbots' },
      { name: 'Coding', href: '/categories/coding' },
      { name: 'Design', href: '/categories/design' },
      { name: 'Writing', href: '/categories/writing' },
      { name: 'Marketing', href: '/categories/marketing' },
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Newsletter', href: '/newsletter' },
      { name: 'API', href: '/api' },
      { name: 'Affiliate Program', href: '/affiliate' },
    ],
    company: [
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
  };

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'GitHub', href: '#', icon: Github },
    { name: 'Email', href: 'mailto:hello@aitoolsdirectory.com', icon: Mail },
  ];

  return (
    <footer className="relative bg-gray-950 border-t border-gray-800/50">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900 to-gray-950" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-6 group">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg hover:scale-110 hover:rotate-3 transition-transform duration-300">
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    AI
                  </span>
                  <span className="text-xl font-bold text-gray-100">ToolsDirectory</span>
                </div>
              </Link>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Discover the best AI tools in one place. Find, compare, and choose the perfect AI solutions for your needs.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-blue-400 transition-all duration-300 p-2 rounded-lg hover:bg-gray-800/50 hover:scale-110 hover:-translate-y-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-100 uppercase tracking-wider mb-4">
              PRODUCT
            </h3>
            <ul className="space-y-3">
              {footerLinks.product.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm hover:translate-x-1 inline-block duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold text-gray-100 uppercase tracking-wider mb-4">
              CATEGORIES
            </h3>
            <ul className="space-y-3">
              {footerLinks.categories.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm hover:translate-x-1 inline-block duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-100 uppercase tracking-wider mb-4">
              RESOURCES
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm hover:translate-x-1 inline-block duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-100 uppercase tracking-wider mb-4">
              COMPANY
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm hover:translate-x-1 inline-block duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} AI Tools Directory. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Made with <span className="text-red-400">❤️</span> for the AI community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
