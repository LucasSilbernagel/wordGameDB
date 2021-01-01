import { Link } from "react-router-dom";
import { StyledMobileNavigation } from './MobileNavigation.styled';

function MobileNavigation() {

  return (

    <StyledMobileNavigation>
      <div id="navIcon">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className="mobileNav" id="mobileNav">
        <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/endpoints">Endpoints</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
      </ul>
    </StyledMobileNavigation>
  )
}

export default MobileNavigation;