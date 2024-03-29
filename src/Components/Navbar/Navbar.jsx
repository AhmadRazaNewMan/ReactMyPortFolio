import React, { useState } from "react";
import "./Navbar.css";
import MobileNav from "./MobileNav/MobileNav";

const Component = () => {
  const [openMenu,setOpenMenu] = useState(false)
   const toggleMenu = ()=>{
    setOpenMenu(!openMenu);
   }
  return (
    <>
    <MobileNav isOpen ={openMenu} toggleMenu = {toggleMenu}/>
      <nav className="nav-wrapper">
        <div className="nav-content">
          <div className="logo">
            <lord-icon
              src="https://cdn.lordicon.com/lhwyshcs.json"
              trigger="loop"
              delay="2000"
              style={{ width: "100px", height: "100px" }}
            ></lord-icon>
          </div>
          <ul>
            <li>
              <a className="menu-item" href="">
                Home
              </a>
            </li>
            <li>
              <a className="menu-item" href="">
                Skills
              </a>
            </li>
            <li>
              <a className="menu-item" href="">
                Work Experience
              </a>{" "}
            </li>
            <li>
              <a className="menu-item" href="">
                Contact Me
              </a>
            </li>
            <button className="contact-btn" onClick={() => {}}>
              Hire Me
            </button>
          </ul>

          <button className="menu-btn" onClick={toggleMenu}>
            <span><lord-icon
              src="https://cdn.lordicon.com/nmguxqka.json"
              trigger="loop"
              delay="2000"
            ></lord-icon>
            </span>

          </button>
        </div>
      </nav>
    </>
  );
};

export default Component;
