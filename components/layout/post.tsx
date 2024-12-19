import Image from 'next/image';
import { Heart, MessageCircle, Send, Bookmark } from 'lucide-react';

interface PostProps {
  post: {
    id: number;
    username: string;
    avatar: string;
    image: string;
    likes: number;
    caption: string;
    comments: number;
    timestamp: string;
  };
}

export default function Post({ post }: PostProps) {
  return (
    <article className="mb-4 border-b border-gray-200 pb-4">
      <div className="flex items-center px-4 py-2">
        <Image
          src={post.avatar}
          alt={post.username}
          width={32}
          height={32}
          className="rounded-full"
        />
        <span className="ml-3 font-semibold">{post.username}</span>
      </div>
      <div className="relative w-full" style={{ paddingTop: '100%' }}>
        <Image
          src={post.image}
          alt={`Post by ${post.username}`}
          fill
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="px-4 pt-2">
        <div className="flex items-center justify-between">
          <div className="flex space-x-4">
            <Heart className="h-6 w-6" />
            <MessageCircle className="h-6 w-6" />
            <Send className="h-6 w-6" />
          </div>
          <Bookmark className="h-6 w-6" />
        </div>
        <p className="mt-2 font-semibold">
          {post.likes.toLocaleString()} likes
        </p>
        <p className="mt-1">
          <span className="font-semibold">{post.username}</span> {post.caption}
        </p>
        <p className="mt-1 text-sm text-gray-500">
          View all {post.comments} comments
        </p>
        <p className="mt-1 text-xs uppercase text-gray-400">
          {new Date(post.timestamp).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          })}
        </p>
      </div>
    </article>
  );
}
