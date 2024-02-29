import React, { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  let classes = "nav-hmbgr";
  const handleClick = (e) => {
    console.log("click");
    open ? setOpen(false) : setOpen(true);
  };
  return (
    <header className="banner">
      <div>
        <span>Akiel Adams</span>
        <nav className="nav">
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </nav>
        <button
          className="hamburger"
          tabIndex={1}
          onClick={handleClick}
        ></button>
      </div>
      <nav className={open ? "nav-hmbgr" : "nav-hmbgr open"}>
        <ul onClick={handleClick}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
