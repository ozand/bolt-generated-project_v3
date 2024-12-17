import React from 'react';

const RightSidebar = () => {
  return (
    <aside className="right-sidebar">
      <section className="active-discussions">
        <h3>Active Discussions</h3>
        <ul>
          <li>Discussion 1</li>
          <li>Discussion 2</li>
          <li>Discussion 3</li>
        </ul>
      </section>
      <section className="sponsored-content">
        <h3>Sponsored Content</h3>
        <div className="ad">Ad 1</div>
        <div className="ad">Ad 2</div>
      </section>
      <section className="events">
        <h3>Events</h3>
        <ul>
          <li>Event 1</li>
          <li>Event 2</li>
        </ul>
      </section>
    </aside>
  );
};

export default RightSidebar;
