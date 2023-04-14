import React from "react";
import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import "./NavBar.css";

export default function NavBar({ user, updateUser }) {
  function handleLogOut() {
    userService.logOut();
    updateUser(null);
  }

  return (
    <nav className="NavBar">
      <img src="./public/images/logo.png" />
      &nbsp; &nbsp;
      <div>
        <Link to="/">Posts</Link>
        &nbsp; &nbsp;
        <Link to="/new">Create Posts</Link>
        &nbsp; &nbsp;
        <Link to="" onClick={handleLogOut}>
          Log Out
        </Link>
      </div>
    </nav>
  );
}
