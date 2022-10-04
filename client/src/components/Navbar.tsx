import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 2rem;
  background: black;
  z-index: 9999999999;
  position: fixed;
  top: 0;
`;

const Wrapper = styled.div``;

const Span = styled.div``;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Span>Navbar</Span>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
