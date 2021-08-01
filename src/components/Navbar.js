import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./DropDown";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const servicesDropDownItems = [
    {
      title: "Interior Designing",
      path: "/interior-designing",
      cName: "dropdown-link",
      icon: "fas fa-drafting-compass",
    },
    {
      title: "Construction",
      path: "/construction",
      cName: "dropdown-link",
      icon: "fas fa-hard-hat",
    },
    {
      title: "Surveying",
      path: "/surveying",
      cName: "dropdown-link",
      icon: "fas fa-pencil-ruler",
    },
  ];
  const onMouseEnter = () => {
    if (window.innerWidth < 1195) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 1195) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className={`navbar navbar-action`}>
        <div className={`navbar-container`}>
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Maze
            <i className="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li
              className="nav-item"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
              {dropdown && (
                <Dropdown
                  items={servicesDropDownItems}
                  key="services-dorpdown"
                />
              )}
            </li>
            <li className="nav-item">
              <Link
                to="/contact-us"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
