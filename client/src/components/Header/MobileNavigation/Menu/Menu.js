import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import { Link } from "react-router-dom";

const Menu = ({ open, setOpen, ...props }) => {
  
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <Link to="/" tabIndex={tabIndex} onClick={() => setOpen(!open)}>Home</Link>
      <Link to="/endpoints" tabIndex={tabIndex} onClick={() => setOpen(!open)}>Endpoints</Link>
      <Link to="/contact" tabIndex={tabIndex} onClick={() => setOpen(!open)}>Contact</Link>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;