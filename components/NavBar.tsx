import React from 'react';
import styled from 'styled-components';

// Styles
const Container = styled.nav`
  height: 60px;
  background: #333;
  padding: 0 1rem;
  border-bottom: 1px solid #474a4d;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  display: flex;
  max-width: 100%;
  height: 100%;
  justify-content: flex-end;
`;

interface Props {
  children: React.ReactNode;
}

const NavBar: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <List>{children}</List>
    </Container>
  );
};

export default NavBar;
