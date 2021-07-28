import React, { useState } from 'react';
import styled from 'styled-components';

// Styles
const Container = styled.li`
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background: #484a4d;
  border-radius: 50%;
  padding: 5px;
  margin: 2px;
  transition: filter 300ms;

  &:hover {
    filter: brightness(1.2);
  }

  svg {
    width: 20px;
    height: 20px;
    fill: #dadce1;
  }
`;

interface Props {
  icon: React.ReactNode;
  children?: React.ReactNode;
}

const NavItem: React.FC<Props> = ({ icon, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Button onClick={() => setOpen((prev) => !prev)}>{icon}</Button>
      {open && children}
    </Container>
  );
};

export default NavItem;
