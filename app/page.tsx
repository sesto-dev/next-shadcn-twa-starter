import Feed from '@/components/layout/feed';
import BottomNav from '@/components/layout/bottom-nav';
import Header from '@/components/layout/header';

const generateInitialPosts = () => {
  return Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    username: `user${i + 1}`,
    avatar: `https://picsum.photos/32/32?random=${i}`,
    image: `https://picsum.photos/614/614?random=${i + 10}`,
    likes: (i + 1) * 100,
    caption: `This is a caption for post ${i + 1}. #instagram #clone`,
    comments: (i + 1) * 10,
    timestamp: new Date(2023, 0, i + 1).toISOString()
  }));
};

export default function Home() {
  const initialPosts = generateInitialPosts();

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Header />
      <Feed initialPosts={initialPosts} />
      <BottomNav />
    </main>
  );
}
