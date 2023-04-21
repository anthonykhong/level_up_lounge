import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import "./NavBar.css";

export default function NavBar({ updateUser }) {
  function handleLogOut() {
    userService.logOut();
    updateUser(null);
  }

  return (
    <nav className="NavBar">
      <a href="/">
        <img
          className="h-8"
          src="https://res.cloudinary.com/diw7vmgum/image/upload/v1682056405/logo_bt3xwm.png"
        />
      </a>
      &nbsp; &nbsp;
      <div>
        <Link
          className="font-display text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-blue-600 hover:text-purple-700"
          to="/"
        >
          Home
        </Link>
        &nbsp; &nbsp;
        <Link
          className="font-display text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-blue-600 hover:text-purple-700"
          to="/posts"
        >
          Forum
        </Link>
        &nbsp; &nbsp;
        <Link
          className="font-display text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-blue-600 hover:text-purple-700"
          to=""
          onClick={handleLogOut}
        >
          Log Out
        </Link>
      </div>
    </nav>
  );
}
