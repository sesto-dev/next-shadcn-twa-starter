import { Home, Search, PlusSquare, Heart, User } from 'lucide-react';

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 flex items-center justify-around border-t border-gray-200 bg-white py-2">
      <Home className="h-6 w-6" />
      <Search className="h-6 w-6" />
      <PlusSquare className="h-6 w-6" />
      <Heart className="h-6 w-6" />
      <User className="h-6 w-6" />
    </nav>
  );
}
