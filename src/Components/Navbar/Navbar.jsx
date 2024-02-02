import React from "react";
import "./Navbar.css";

const Component = () => {
  return (
    <>
      <nav className="nav-wrapper">
        <div className="nav-content">
          <div className="logo">
            <lord-icon
              src="https://cdn.lordicon.com/lhwyshcs.json"
              trigger="loop"
              delay="2000"
              style={{width:"100px",height:"100px"}}
            ></lord-icon>
          </div>
          <ul>
            <li >
              <a className="menu-item" href="">Home</a>
            </li>
            <li >
              <a className="menu-item" href="">Skills</a>
            </li>
            <li >
              <a className="menu-item" href="">Work Experience</a>{" "}
            </li>
            <li >
              <a className="menu-item" href="">Contact Me</a>
            </li>
          </ul>
          <button className="contact-btn" onClick={() => {}}>
            Hire Me
          </button>
        </div>
      </nav>
    </>
  );
};

export default Component;
