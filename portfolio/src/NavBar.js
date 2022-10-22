import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./App.css";

const NavBar = () => {
  const [selected, setSelected] = useState(0);
  let params = useParams();
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link
            className={selected === 0 ? "selected" : ""}
            onClick={() => {
              setSelected(0);
            }}
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={selected === 1 ? "selected" : ""}
            onClick={() => {
              setSelected(1);
            }}
            to="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={selected === 2 ? "selected" : ""}
            onClick={() => {
              setSelected(2);
            }}
            to="/articles-list"
          >
            Article List
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
