import { Camera, Heart, PlusSquare, Instagram } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 bg-white px-4 py-2">
      <Camera className="h-6 w-6" />
      <Instagram className="h-8 w-24" />
      <div className="flex items-center space-x-4">
        <PlusSquare className="h-6 w-6" />
        <Heart className="h-6 w-6" />
      </div>
    </header>
  );
}
