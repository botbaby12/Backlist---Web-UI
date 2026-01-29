import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface MobileFilterTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function MobileFilterTabs({ activeTab, onTabChange }: MobileFilterTabsProps) {
  return (
    <div className="md:hidden px-4 py-3">
      <Tabs value={activeTab} onValueChange={onTabChange}>
        <TabsList className="w-full">
          <TabsTrigger value="all" className="flex-1">All</TabsTrigger>
          <TabsTrigger value="ai-picks" className="flex-1">AI Picks</TabsTrigger>
          <TabsTrigger value="saved" className="flex-1">Saved</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
