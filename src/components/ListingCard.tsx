import { Heart, Sparkles, MapPin, Clock, Gauge } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { SourceIcon } from './SourceIcon';
import { DealBadge } from './DealBadge';
import { Listing } from '@/types/listing';
import { cn } from '@/lib/utils';

interface ListingCardProps {
  listing: Listing;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
}

export function ListingCard({ listing, isSaved, onToggleSave }: ListingCardProps) {
  const formatPrice = (price: number) => 
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(price);

  const formatMileage = (mileage: number) =>
    new Intl.NumberFormat('en-US').format(mileage);

  return (
    <Card className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-card">
      <div className="relative">
        <AspectRatio ratio={4 / 3}>
          <img
            src={listing.imageUrl}
            alt={listing.title}
            className="object-cover w-full h-full"
          />
        </AspectRatio>
        
        {/* Source badge */}
        <div className="absolute top-3 left-3">
          <SourceIcon source={listing.source} />
        </div>
        
        {/* Deal badge */}
        <div className="absolute top-3 right-3">
          <DealBadge grade={listing.dealGrade} />
        </div>
        
        {/* Save button */}
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            'absolute bottom-3 right-3 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-md',
            'transition-all duration-200'
          )}
          onClick={(e) => {
            e.preventDefault();
            onToggleSave(listing.id);
          }}
        >
          <Heart
            className={cn(
              'h-5 w-5 transition-colors',
              isSaved ? 'fill-red-500 text-red-500' : 'text-gray-600'
            )}
          />
        </Button>
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-foreground truncate mb-2">
          {listing.title}
        </h3>
        
        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
          <span className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            {listing.distance}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {listing.postedDate}
          </span>
          <span className="flex items-center gap-1">
            <Gauge className="h-3 w-3" />
            {formatMileage(listing.mileage)} mi
          </span>
        </div>

        <div className="flex items-end justify-between">
          <div>
            <p className="text-xl font-bold text-foreground">
              {formatPrice(listing.price)}
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              <Sparkles className="h-3 w-3 text-amber-500" />
              Est. {formatPrice(listing.estimatedValue)}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
