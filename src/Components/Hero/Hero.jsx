import React from "react";
// import javascripts from '../../assets/javascripts.svg'
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>Building Digital Experience That Inspires</h2>
        <p>
          Passionate Full Stack Web Developer | Transforming Ideas into Seamless
          and visually appealing digital experiences. Let’s create something
          together.
        </p>
      </div>
      <div className="hero-img">
        <div>
          <div className="tech-icon">
           
            <img
              style={{ objectFit: "cover" }}
              src="https://images.unsplash.com/photo-1635586409095-b5d87cebe12b?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>

        <div>
          <div className="tech-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-label="JavaScript"
              role="img"
              viewBox="0 0 512 512"
              width="100"
              height="100"
            >
              <rect width="500" height="500" rx="15%" fill="#f7df1e" />
              <path d="M324 370c10 17 24 29 47 29c20 0 33-10 33 -24c0-16 -13 -22 -35 -32l-12-5c-35-15 -58 -33 -58 -72c0-36 27 -64 70 -64c31 0 53 11 68 39l-37 24c-8-15 -17 -21 -31 -21c-14 0-23 9 -23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76c0 43-34 67 -80 67c-45 0-74 -21 -88 -49zm-170 4c8 13 14 25 31 25c16 0 26-6 26 -30V203h48v164c0 50-29 72-72 72c-39 0-61 -20 -72 -44z" />
            </svg>
            {/* <img style={{width:"500px", height:"500px", objectFit:"cover"}} src="https://images.unsplash.com/photo-1635586409095-b5d87cebe12b?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
          </div>

          <div className="tech-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-label="JavaScript"
              role="img"
              viewBox="0 0 512 512"
              width="100"
              height="100"
            >
              <rect width="500" height="500" rx="15%" fill="#f7df1e" />
              <path d="M324 370c10 17 24 29 47 29c20 0 33-10 33 -24c0-16 -13 -22 -35 -32l-12-5c-35-15 -58 -33 -58 -72c0-36 27 -64 70 -64c31 0 53 11 68 39l-37 24c-8-15 -17 -21 -31 -21c-14 0-23 9 -23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76c0 43-34 67 -80 67c-45 0-74 -21 -88 -49zm-170 4c8 13 14 25 31 25c16 0 26-6 26 -30V203h48v164c0 50-29 72-72 72c-39 0-61 -20 -72 -44z" />
            </svg>
            {/* <img style={{width:"500px", height:"500px", objectFit:"cover"}} src="https://images.unsplash.com/photo-1635586409095-b5d87cebe12b?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
          </div>

          <div className="tech-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-label="JavaScript"
              role="img"
              viewBox="0 0 512 512"
              width="100"
              height="100"
            >
              <rect width="500" height="500" rx="15%" fill="#f7df1e" />
              <path d="M324 370c10 17 24 29 47 29c20 0 33-10 33 -24c0-16 -13 -22 -35 -32l-12-5c-35-15 -58 -33 -58 -72c0-36 27 -64 70 -64c31 0 53 11 68 39l-37 24c-8-15 -17 -21 -31 -21c-14 0-23 9 -23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76c0 43-34 67 -80 67c-45 0-74 -21 -88 -49zm-170 4c8 13 14 25 31 25c16 0 26-6 26 -30V203h48v164c0 50-29 72-72 72c-39 0-61 -20 -72 -44z" />
            </svg>
            {/* <img style={{width:"500px", height:"500px", objectFit:"cover"}} src="https://images.unsplash.com/photo-1635586409095-b5d87cebe12b?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
