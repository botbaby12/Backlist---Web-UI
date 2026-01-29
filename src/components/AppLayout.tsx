import { ReactNode } from 'react';
import { DesktopSidebar } from './DesktopSidebar';
import { MobileHeader } from './MobileHeader';
import { MobileBottomNav } from './MobileBottomNav';

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex min-h-screen bg-background">
      <DesktopSidebar />
      
      <div className="flex-1 flex flex-col">
        <MobileHeader />
        
        <main className="flex-1 pb-20 md:pb-0">
          {children}
        </main>
        
        <MobileBottomNav />
      </div>
    </div>
  );
}
