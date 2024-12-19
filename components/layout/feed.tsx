'use client';

import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Post from '@/components//layout/post';
import Header from '@/components/layout/header';

interface FeedProps {
  initialPosts: Array<{
    id: number;
    username: string;
    avatar: string;
    image: string;
    likes: number;
    caption: string;
    comments: number;
    timestamp: string;
  }>;
}

const generatePlaceholderPost = (id: number) => ({
  id,
  username: `user${id}`,
  avatar: `https://picsum.photos/32/32?random=${id + 100}`,
  image: `https://picsum.photos/614/614?random=${id + 200}`,
  likes: id * 100,
  caption: `This is a caption for post ${id}. #instagram #clone`,
  comments: id * 10,
  timestamp: new Date(2023, 0, id).toISOString()
});

export default function Feed({ initialPosts }: FeedProps) {
  const [posts, setPosts] = useState(initialPosts);

  const fetchMoreData = () => {
    const newPosts = Array.from({ length: 5 }, (_, i) =>
      generatePlaceholderPost(posts.length + i + 1)
    );
    setPosts([...posts, ...newPosts]);
  };

  return (
    <div className="flex-1 overflow-y-auto">
      <InfiniteScroll
        dataLength={posts.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4 className="py-4 text-center">Loading...</h4>}
        endMessage={<p className="py-4 text-center">No more posts</p>}
      >
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </InfiniteScroll>
    </div>
  );
}
