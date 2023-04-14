import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar({ user }) {
  return (
    <nav className="NavBar">
      <img src="./public/images/logo.png" />
      &nbsp; &nbsp;
      <Link to="/">Posts</Link>
      &nbsp; &nbsp;
      <Link to="/new">Create Posts</Link>
    </nav>
  );
}
