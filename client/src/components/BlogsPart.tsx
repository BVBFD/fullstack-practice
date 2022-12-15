import React from "react";
import { BlogType } from "../pages/Home";
import BlogPart from "./BlogPart";

type BlogsPartPropsType = {
  currentPosts: Array<BlogType>;
};

const BlogsPart = ({ currentPosts }: BlogsPartPropsType) => {
  return (
    <>
      {currentPosts?.map((post) =>
        post == null ? <div></div> : <BlogPart key={post._id} post={post} />
      )}
    </>
  );
};

export default BlogsPart;
