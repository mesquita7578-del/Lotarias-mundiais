
import React from 'react';
import { LayoutGrid, BookOpen, MessageSquare, Info, Image as ImageIcon } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'explore', label: 'Galeria', icon: LayoutGrid },
    { id: 'archive', label: 'Arquivo', icon: ImageIcon },
    { id: 'stats', label: 'História', icon: Info },
    { id: 'advisor', label: 'Curador', icon: MessageSquare },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-slate-900/80 backdrop-blur-lg border border-slate-700/50 rounded-full px-4 py-2 flex items-center gap-1 z-50 shadow-2xl">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;
        return (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 ${
              isActive 
                ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/20' 
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Icon size={18} />
            <span className="text-xs font-medium hidden md:block">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default Navbar;
