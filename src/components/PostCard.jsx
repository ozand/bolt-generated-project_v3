import React from 'react';

const PostCard = () => {
  return (
    <div className="post-card">
      <img src="https://via.placeholder.com/150" alt="Post" />
      <h3>Post Title</h3>
      <p>Short description of the post...</p>
      <div className="post-info">
        <span>Author Name</span>
        <div className="interactions">
          <button>Like</button>
          <button>Comment</button>
          <button>Save</button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
