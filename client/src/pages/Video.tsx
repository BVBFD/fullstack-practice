import React from 'react';
import styled from 'styled-components';
import { PropType } from '../App';

type VideoPropsType = {
  prop?: PropType;
};

const Container = styled.div`
  position: relative;
  top: 2rem;
`;

const Wrapper = styled.div``;

const Span = styled.div``;

const Video = ({ prop }: VideoPropsType) => {
  console.log(prop?.test);

  return (
    <Container>
      <Wrapper>
        <Span>{prop?.test} Video</Span>
      </Wrapper>
    </Container>
  );
};

export default Video;
