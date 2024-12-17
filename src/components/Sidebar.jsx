import React from 'react';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li>Home</li>
          <li>Subscriptions</li>
          <li>Notifications</li>
        </ul>
      </nav>
      <section className="tags">
        <h3>Tags</h3>
        <ul>
          <li>Tag 1</li>
          <li>Tag 2</li>
          <li>Tag 3</li>
        </ul>
      </section>
      <section className="popular-topics">
        <h3>Popular Topics</h3>
        <ul>
          <li>Topic 1</li>
          <li>Topic 2</li>
          <li>Topic 3</li>
        </ul>
      </section>
      <section className="personal-links">
        <h3>Personal Links</h3>
        <ul>
          <li>Bookmarks</li>
          <li>Drafts</li>
        </ul>
      </section>
    </aside>
  );
};

export default Sidebar;
