import { NavLink } from "react-router-dom";
import { StyledDesktopNavigation } from './DesktopNavigation.styled';
import React  from 'react';

function DesktopNavigation() {

  return (

    <StyledDesktopNavigation>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="current">Home</NavLink>
        </li>
        <li>
          <NavLink exact to="/endpoints" activeClassName="current">Endpoints</NavLink>
        </li>
        <li>
          <NavLink exact to="/contact" activeClassName="current">Contact</NavLink>
        </li>
      </ul>
    </StyledDesktopNavigation>
  )
}

export default DesktopNavigation;