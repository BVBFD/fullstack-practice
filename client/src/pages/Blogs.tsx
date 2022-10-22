import React from 'react';
import styled from 'styled-components';
import BlogsPart from '../components/BlogsPart';

const BlogContainer = styled.div`
  padding-top: 12vh;
`;

const Header = styled.header`
  text-transform: capitalize;
  color: whitesmoke;
  font-size: 5rem;
  font-weight: bolder;
  text-align: center;
`;

const HeaderSpan = styled.span`
  color: goldenrod;
`;

const BlogWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50rem, 1fr));
  gap: 4rem;
  color: white;
  background-color: black;
  padding: 4rem 8rem 4rem 8rem;
`;

const Blogs = () => {
  return (
    <BlogContainer>
      <Header>
        Our <HeaderSpan>Blogs</HeaderSpan>
      </Header>
      <BlogWrapper>
        <BlogsPart />
      </BlogWrapper>
    </BlogContainer>
  );
};

export default Blogs;
