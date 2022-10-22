import React from 'react';
import styled from 'styled-components';

const BlogArticle = styled.article`
  border: 1px solid lightgray;
  cursor: pointer;

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

const BlogPart = () => {
  return (
    <BlogArticle>
      <BlogFigure>
        <BlogImg src='images/blog-1.jpeg' />
      </BlogFigure>
      <ArticleWrapper>
        <ArticleHeader>BlogPart</ArticleHeader>
        <ArticleSideHeader>By Admin / 3rd December, 2021</ArticleSideHeader>
        <ArticleMain>
          You always spend most times with your works. So, I think you can
          concentrate on your works in the cafe drinking coffee.
        </ArticleMain>
        <ArticleBtn>Read More</ArticleBtn>
      </ArticleWrapper>
    </BlogArticle>
  );
};

export default BlogPart;
