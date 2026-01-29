import { useState } from 'react';
import { AppLayout } from '@/components/AppLayout';
import { ListingsGrid } from '@/components/ListingsGrid';
import { SearchBar } from '@/components/SearchBar';
import { MobileFilterTabs } from '@/components/MobileFilterTabs';
import { mockListings } from '@/data/mockListings';
import { useSavedListings } from '@/hooks/useSavedListings';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileTab, setMobileTab] = useState('all');
  const { savedIds, toggleSaved } = useSavedListings();

  const filteredListings = mockListings.filter((listing) => {
    const matchesSearch = listing.title.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (mobileTab === 'saved') {
      return matchesSearch && savedIds.has(listing.id);
    }
    if (mobileTab === 'ai-picks') {
      return matchesSearch && listing.dealGrade === 'steal';
    }
    return matchesSearch;
  });

  return (
    <AppLayout>
      {/* Desktop header */}
      <div className="hidden md:flex items-center justify-between p-6 border-b border-border">
        <h2 className="text-2xl font-bold text-foreground">Listings</h2>
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
      </div>

      {/* Mobile filter tabs */}
      <MobileFilterTabs activeTab={mobileTab} onTabChange={setMobileTab} />

      {/* Listings grid */}
      <div className="p-4 md:p-6">
        <ListingsGrid 
          listings={filteredListings} 
          savedIds={savedIds} 
          onToggleSave={toggleSaved} 
        />
      </div>
    </AppLayout>
  );
};

export default Index;
