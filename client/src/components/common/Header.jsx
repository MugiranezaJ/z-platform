import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/auth/authSlice";

function Header() {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const onLogout = async () => {
    console.log("#1....");
    logout()(dispatch);
  };
  return (
    <header className="bg-blue-600 border-b shadow text-white py-4">
      <nav className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-lg font-bold">
          Company Z
        </Link>

        <ul className="flex space-x-4">
          {auth.isLoggedIn && (
            <li>
              <button onClick={onLogout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
