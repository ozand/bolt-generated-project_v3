import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Logo</div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <button className="create-post-btn">Create Post</button>
    </header>
  );
};

export default Header;
