import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/endpoints">Endpoints</Link>
      </nav>

      <h1>Word Game DB</h1>
    </>
  )
}

export default Header;