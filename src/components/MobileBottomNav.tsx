import { NavLink } from '@/components/NavLink';
import { Home, List, Package, Trophy, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/', label: 'Feed', icon: List },
  { to: '/inventory', label: 'Inventory', icon: Package },
  { to: '/wins', label: 'Wins', icon: Trophy },
  { to: '/settings', label: 'Settings', icon: Settings },
];

export function MobileBottomNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
      <ul className="flex justify-around items-center h-16">
        {navItems.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.to}
              className={cn(
                'flex flex-col items-center gap-1 px-3 py-2 text-muted-foreground',
                'transition-colors'
              )}
              activeClassName="text-primary"
            >
              <item.icon className="h-5 w-5" />
              <span className="text-xs">{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
