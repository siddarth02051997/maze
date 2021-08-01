import React, { useState, useEffect } from "react";
import "./DropDown.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Dropdown({ items }) {
  const [click, setClick] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 200 });
  }, []);
  const handleClick = () => setClick(!click);

  return (
    <>
      <div className="dropdown-menu" data-aos="fade-in">
        <ul
          onClick={handleClick}
          className={click ? "clicked" : ""}
          data-aos="zoom-in"
        >
          {items.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  className={item.cName}
                  to={item.path}
                  onClick={() => setClick(false)}
                >
                  <i class={item.icon} style={{ paddingRight: "15px" }} />
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Dropdown;
