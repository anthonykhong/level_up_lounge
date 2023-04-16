import React, { useState } from "react";
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
      <img className="h-8" src="./public/images/logo.png" />
      &nbsp; &nbsp;
      <div>
        <Link
          className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-blue-600 hover:text-purple-700"
          to="/"
        >
          Home
        </Link>
        &nbsp; &nbsp;
        <Link
          className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-blue-600 hover:text-purple-700"
          to="/posts"
        >
          Posts
        </Link>
        &nbsp; &nbsp;
        <Link
          className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-blue-600 hover:text-purple-700"
          to=""
          onClick={handleLogOut}
        >
          Log Out
        </Link>
      </div>
    </nav>
  );
}
