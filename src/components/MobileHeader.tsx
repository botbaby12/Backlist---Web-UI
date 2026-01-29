import { Search, LayoutList, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function MobileHeader() {
  return (
    <header className="md:hidden flex items-center justify-between p-4 bg-card border-b border-border sticky top-0 z-40">
      <h1 className="text-xl font-bold text-foreground tracking-tight">
        Backlist
      </h1>
      
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="text-muted-foreground">
          <LayoutList className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-muted-foreground">
          <DollarSign className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-muted-foreground">
          <Search className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}
