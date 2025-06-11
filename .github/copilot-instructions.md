<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# AI Tools Directory - Copilot Instructions

This is a premium AI tools directory website built with Next.js, TypeScript, and Tailwind CSS. The project is designed for affiliate monetization and SEO optimization.

## Project Structure

- `/src/app` - Next.js App Router pages and layouts
- `/src/components` - Reusable React components
- `/src/data` - Static data for tools, categories, and blog posts
- `/src/lib` - Utility functions and business logic
- `/src/types` - TypeScript type definitions

## Key Features

1. **Homepage**: Hero section, search bar, featured tools, categories preview
2. **Tool Directory**: Comprehensive listing with filtering and search
3. **Category Pages**: Tools organized by use case and industry
4. **Tool Detail Pages**: Full reviews with screenshots, pros/cons, affiliate links
5. **Blog**: SEO-optimized content for driving traffic
6. **Affiliate Monetization**: Click tracking and CTA optimization

## Development Guidelines

- Use TypeScript for all new code
- Follow Tailwind CSS utility-first approach
- Implement proper SEO metadata for all pages
- Track affiliate clicks using the `trackAffiliateClick` utility
- Use the established component patterns for consistency
- Optimize for mobile-first responsive design

## Affiliate Monetization

- All tool cards should include affiliate CTAs
- Use `trackAffiliateClick()` function for analytics
- Support multiple affiliate networks (Impact, PartnerStack, ShareASale)
- Implement proper disclosure and compliance

## SEO Optimization

- Generate proper metadata for all pages
- Use structured data for tool listings
- Implement proper heading hierarchy (H1, H2, H3)
- Optimize images with proper alt text
- Use semantic HTML elements
