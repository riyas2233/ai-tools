'use client';

import { trackAffiliateClick } from '@/lib/utils';
import { AITool } from '@/types';

interface AffiliateButtonProps {
  tool: AITool;
  children: React.ReactNode;
  className?: string;
}

export default function AffiliateButton({ tool, children, className }: AffiliateButtonProps) {
  const handleClick = () => {
    trackAffiliateClick(tool.id, tool.name);
    const url = tool.affiliateLink || tool.website;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className={className}
    >
      {children}
    </button>
  );
}
