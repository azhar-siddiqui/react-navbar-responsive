import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { VscMenu, VscChromeClose } from "react-icons/vsc";

const routes = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/services",
    name: "Services",
  },
  {
    path: "/contact",
    name: "Contact",
  },
];

const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const togglebtn = () => {
    settoggle(!toggle);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    
      window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav className="nav-container">
      <Link to="/" className="logo">
        Logo
      </Link>
      {(toggle || screenWidth > 800) && (
        <ul className="nav-list">
          {routes.map((route) => {
            return (
              <li key={route.name} className="nav-menu">
                <Link to={route.path} className="nav-links">
                  {route.name}
                </Link>
              </li>
            );
          })}
        </ul>
      )}

      <button type="btn" className="btn icon-btn" onClick={togglebtn}>
        {toggle ? (
          <VscChromeClose className="nav-menu-icon" />
        ) : (
          <VscMenu className="nav-menu-icon" />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
