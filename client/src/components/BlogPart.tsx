import React from "react";
import styled from "styled-components";
import { BlogType } from "../pages/Home";

const BlogArticle = styled.article`
  border: 1px solid lightgray;
  cursor: pointer;
  transform: scale(0.85);

  &:hover {
    img {
      transform: scale(1.2);
    }
  }
`;

const BlogFigure = styled.figure`
  overflow: hidden;
`;

const BlogImg = styled.img`
  width: 100%;
  height: 25rem;
  object-fit: cover;
`;

const ArticleWrapper = styled.div`
  padding: 1rem 2rem 2rem 2rem;
`;

const ArticleHeader = styled.header`
  font-size: 2rem;
  margin: 1rem 0 1rem 0;
  font-weight: bolder;
`;

const ArticleSideHeader = styled.span`
  display: inline-block;
  margin: 0 0 1rem 0;
  font-size: 1.4rem;
  color: goldenrod;
`;

const ArticleMain = styled.main`
  margin-bottom: 2rem;
  font-size: 1.2rem;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  line-height: 2rem;
  max-height: 1.8rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ArticleBtn = styled.button`
  background-color: goldenrod;
  color: white;
  padding: 0.8rem 1.2rem 0.8rem 1.2rem;
  cursor: pointer;

  &:hover {
    color: goldenrod;
    background-color: white;
  }

  &:active {
    transform: scale(0.8);
  }
`;

interface BlogPartPropsType {
  post: BlogType;
}

const BlogPart = ({ post }: BlogPartPropsType) => {
  return (
    <BlogArticle>
      <BlogFigure>
        <BlogImg src="images/blog-1.jpeg" />
      </BlogFigure>
      <ArticleWrapper>
        <ArticleHeader>{post.title}</ArticleHeader>
        <ArticleSideHeader>By Admin / {post.createdAt}</ArticleSideHeader>
        <ArticleMain>{post.contents}</ArticleMain>
        <ArticleBtn>Read More</ArticleBtn>
      </ArticleWrapper>
    </BlogArticle>
  );
};

export default BlogPart;
