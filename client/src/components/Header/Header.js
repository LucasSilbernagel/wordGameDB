import React, { useState, useRef } from 'react';
import { useOnClickOutside } from '.././../hooks';
import { Burger, Menu } from './MobileNavigation/MobileNavigation';
import { StyledHeader } from './Header.styled';
import FocusLock from 'react-focus-lock';
import DesktopNavigation from './DesktopNavigation/DesktopNavigation';

function Header() {

  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  return (
    <StyledHeader >
      <div className="wrapper">

        {/* Mobile navigation */}
        <div ref={node}>
          <FocusLock disabled={!open}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
          </FocusLock>
        </div>

        <DesktopNavigation />
        
        <h1>Word Game DB</h1>
      </div>
    </StyledHeader >
  )
}

export default Header;