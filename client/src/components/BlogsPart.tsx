import React from 'react';
import BlogPart from './BlogPart';

type BlogsPartPropsType = {
  currentPosts: Array<number>;
};

const BlogsPart = ({ currentPosts }: BlogsPartPropsType) => {
  return (
    <>
      {currentPosts?.map((post) => (post == null ? <div></div> : <BlogPart />))}
    </>
  );
};

export default BlogsPart;
