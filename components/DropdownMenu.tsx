import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import Cog from './svg/cog.svg';
import Chevron from './svg/chevron.svg';
import Arrow from './svg/arrow.svg';
import Bolt from './svg/bolt.svg';
import DropdownItem from './DropdownItem';

// Styles
const Container = styled.div`
  position: absolute;
  top: 62px;
  width: 300px;
  transform: translateX(-45%);
  background: #242526;
  border: 1px solid #474a4d;
  border-radius: 8px;
  padding: 1rem;
  overflow: hidden;
  animation: showMenu;
  animation-duration: 0.1s;
  transition: height 500ms ease;

  .menu {
    width: 100%;
  }

  // CSSTransition styles
  .primary-enter {
    position: absolute;
    transform: translateX(-110%);
  }

  .primary-enter-active {
    transform: translateX(0%);
    transition: all 500ms ease;
  }

  .primary-exit {
    position: absolute;
  }

  .primary-exit-active {
    transform: translateX(-110%);
    transition: all 500ms ease;
  }

  .secondary-enter {
    transform: translateX(110%);
  }

  .secondary-enter-active {
    transform: translateX(0%);
    transition: all 500ms ease;
  }

  .secondary-exit {
  }

  .secondary-exit-active {
    transform: translateX(110%);
    transition: all 500ms ease;
  }
`;

export type MenuType = 'main' | 'settings' | 'animals';

interface Props {}

const DropdownMenu: React.FC<Props> = ({}) => {
  const [activeMenu, setActiveMenu] = useState<MenuType>('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // @ts-ignore
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  const calcHeight = (ele: HTMLDivElement) => {
    const height = ele.offsetHeight;
    setMenuHeight(height);
  };

  return (
    <Container style={{ height: menuHeight }} ref={dropdownRef}>
      {/* Main menu */}
      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="primary"
        unmountOnExit
        // @ts-ignore
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<Cog />}
            rightIcon={<Chevron />}
            goToMenu="settings"
            setActiveMenu={setActiveMenu}
          >
            Settings
          </DropdownItem>
          <DropdownItem
            leftIcon={<>🦧</>}
            rightIcon={<Chevron />}
            goToMenu="settings"
            setActiveMenu={setActiveMenu}
          >
            Animals
          </DropdownItem>
        </div>
      </CSSTransition>

      {/* Settings Menu */}
      <CSSTransition
        in={activeMenu === 'settings'}
        timeout={500}
        classNames="secondary"
        unmountOnExit
        // @ts-ignore
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem
            goToMenu="main"
            leftIcon={<Arrow />}
            setActiveMenu={setActiveMenu}
          >
            <h2>My Tutorial</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<Bolt />}>HTML</DropdownItem>
          <DropdownItem leftIcon={<Bolt />}>CSS</DropdownItem>
          <DropdownItem leftIcon={<Bolt />}>JavaScript</DropdownItem>
          <DropdownItem leftIcon={<Bolt />}>Typescript</DropdownItem>
        </div>
      </CSSTransition>

      {/* Animals Menu */}
      <CSSTransition
        in={activeMenu === 'animals'}
        timeout={500}
        classNames="secondary"
        unmountOnExit
        // @ts-ignore
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem
            goToMenu="main"
            leftIcon={<Arrow />}
            setActiveMenu={setActiveMenu}
          >
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<>🦘</>}>Kangaroo</DropdownItem>
          <DropdownItem leftIcon={<>🐸</>}>Frog</DropdownItem>
          <DropdownItem leftIcon={<>🦋</>}>Horse</DropdownItem>
          <DropdownItem leftIcon={<>🦔</>}>Hedgehog</DropdownItem>
        </div>
      </CSSTransition>
    </Container>
  );
};

export default DropdownMenu;
