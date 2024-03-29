import React from 'react';

import BlogCards from './BlogCards';
import BlogHeader from './BlogHeader';

function Blog() {
  return (
    <div className="bg-[#f6f6f6]" id="blog">
      <BlogHeader />
      <BlogCards />
    </div>
  );
}

export default Blog;
