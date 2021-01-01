import { Link } from "react-router-dom";
import { StyledDesktopNavigation } from './DesktopNavigation.styled';

function MobileNavigation() {

  return (

    <StyledDesktopNavigation>
      <ul>
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
    </StyledDesktopNavigation>
  )
}

export default MobileNavigation;