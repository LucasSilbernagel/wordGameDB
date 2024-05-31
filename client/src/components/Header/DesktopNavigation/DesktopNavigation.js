import { NavLink } from 'react-router-dom'
import { StyledDesktopNavigation } from './DesktopNavigation.styled'

function DesktopNavigation() {
  return (
    <StyledDesktopNavigation>
      <ul>
        <li>
          <NavLink
            exact="true"
            to="/"
            style={({ isActive }) => ({
              boxShadow: isActive ? '5px 5px #F4F1DE' : '',
            })}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            exact="true"
            to="/endpoints"
            style={({ isActive }) => ({
              boxShadow: isActive ? '5px 5px #F4F1DE' : '',
            })}
          >
            Endpoints
          </NavLink>
        </li>
        <li>
          <NavLink
            exact="true"
            to="/contact"
            style={({ isActive }) => ({
              boxShadow: isActive ? '5px 5px #F4F1DE' : '',
            })}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </StyledDesktopNavigation>
  )
}

export default DesktopNavigation
