import React from 'react';
import PostCard from './PostCard';

const MainContent = () => {
  return (
    <main className="main-content">
      <div className="tabs">
        <button>Discover</button>
        <button>Following</button>
      </div>
      <div className="post-grid">
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </main>
  );
};

export default MainContent;
