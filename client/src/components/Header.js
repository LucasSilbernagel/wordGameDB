import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav>
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
      </nav>

      <h1>Word Game DB</h1>
    </>
  )
}

export default Header;