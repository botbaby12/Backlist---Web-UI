import { ListingSource } from '@/types/listing';
import { cn } from '@/lib/utils';

const sourceConfig: Record<ListingSource, { label: string; bgColor: string; textColor: string }> = {
  craigslist: { label: 'CL', bgColor: 'bg-purple-600', textColor: 'text-white' },
  facebook: { label: 'FB', bgColor: 'bg-blue-600', textColor: 'text-white' },
  carscom: { label: 'Cars', bgColor: 'bg-orange-500', textColor: 'text-white' },
  autotrader: { label: 'AT', bgColor: 'bg-red-600', textColor: 'text-white' },
};

interface SourceIconProps {
  source: ListingSource;
  className?: string;
}

export function SourceIcon({ source, className }: SourceIconProps) {
  const config = sourceConfig[source];
  
  return (
    <div
      className={cn(
        'px-2 py-1 rounded text-xs font-bold',
        config.bgColor,
        config.textColor,
        className
      )}
    >
      {config.label}
    </div>
  );
}
