import { ListingSource } from '@/types/listing';
import { cn } from '@/lib/utils';
import craigslistLogo from '@/assets/logos/craigslist-logo.png';
import autotraderLogo from '@/assets/logos/autotrader-logo.png';
import facebookLogo from '@/assets/logos/facebook-logo.png';

interface SourceIconProps {
  source: ListingSource;
  className?: string;
}

export function SourceIcon({ source, className }: SourceIconProps) {
  const getLogoSrc = () => {
    switch (source) {
      case 'craigslist':
        return craigslistLogo;
      case 'autotrader':
        return autotraderLogo;
      case 'facebook':
        return facebookLogo;
      case 'carscom':
        return null; // Use text fallback
    }
  };

  const logoSrc = getLogoSrc();

  if (logoSrc) {
    return (
      <div className={cn(
        'w-7 h-7 rounded-md overflow-hidden bg-white shadow-sm flex items-center justify-center',
        className
      )}>
        <img 
          src={logoSrc} 
          alt={source} 
          className="w-full h-full object-contain p-0.5"
        />
      </div>
    );
  }

  // Fallback for cars.com - purple gradient like their branding
  return (
    <div className={cn(
      'px-1.5 py-0.5 rounded text-[9px] font-bold text-white shadow-sm',
      'bg-gradient-to-r from-purple-600 to-purple-500',
      className
    )}>
      Cars
    </div>
  );
}
