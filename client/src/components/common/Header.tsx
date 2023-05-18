import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-blue-600 border-b shadow text-white py-4">
      <nav className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-lg font-bold">
          Company Z
        </Link>

        <ul className="flex space-x-4">
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
