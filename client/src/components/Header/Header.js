import React, { useState, useRef } from 'react';
import { useOnClickOutside } from '.././../hooks';
import { Burger, Menu } from './MobileNavigation';
import FocusLock from 'react-focus-lock';
import DesktopNavigation from './DesktopNavigation/DesktopNavigation';
import AppTitle from './AppTitle/AppTitle';

function Header() {

  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  return (
    <header>
      <div className="wrapper">
        <div ref={node}>
          <FocusLock disabled={!open}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
          </FocusLock>
        </div>
        <DesktopNavigation />
        <AppTitle />
      </div>
    </header>
  )
}

export default Header;