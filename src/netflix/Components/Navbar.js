import React, { useEffect, useState } from "react";
import "./Navbar.css";
const Navbar = () => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", handleShow);
    };
  });

  return (
    <nav className={`navbar ${show && "nav__black"} `}>
      <div className="logo">
        <img src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png" />
      </div>
      <ul className="menu">
        <li className="nav-item">
          <a
            href="https://www.instagram.com/pistanthrobian"
            className="nav-link"
          >
            Say Hi
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
