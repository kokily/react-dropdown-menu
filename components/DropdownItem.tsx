import React from 'react';
import styled from 'styled-components';
import { MenuType } from './DropdownMenu';

// Styles
const Container = styled.a`
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  transition: 500ms;
  padding: 0.5rem;
  color: white;

  &:hover {
    background: #525357;
  }

  span {
    svg {
      width: 20px;
      height: 20px;
      fill: #dadce1;
    }
  }

  .button {
    margin-right: 0.5rem;
    filter: brightness(1.2);

    &:hover {
      filter: none;
    }
  }

  .right {
    margin-left: auto;
  }
`;

interface Props {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
  goToMenu?: MenuType;
  setActiveMenu?: React.Dispatch<React.SetStateAction<MenuType>>;
}

const DropdownItem: React.FC<Props> = ({
  leftIcon,
  rightIcon,
  children,
  goToMenu,
  setActiveMenu,
}) => {
  return (
    <Container onClick={() => goToMenu && setActiveMenu(goToMenu)}>
      <span className="button">{leftIcon}</span>
      {children}
      <span className="right">{rightIcon}</span>
    </Container>
  );
};

export default DropdownItem;
