import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
import NavItem from './NavItem';
import Plus from './svg/plus.svg';
import Bell from './svg/bell.svg';
import Messenger from './svg/messenger.svg';
import Caret from './svg/caret.svg';
import DropdownMenu from './DropdownMenu';

interface Props {}

const Header: React.FC<Props> = ({}) => {
  return (
    <NavBar>
      <NavItem icon={<Plus />} />
      <NavItem icon={<Bell />} />
      <NavItem icon={<Messenger />} />

      <NavItem icon={<Caret />}>
        <DropdownMenu />
      </NavItem>
    </NavBar>
  );
};

export default Header;
