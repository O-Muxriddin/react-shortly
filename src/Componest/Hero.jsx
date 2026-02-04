import React from "react";
import "./hero.css";
export default function Hero() {
  return (
    <>
      <section className="section_container">
        <div className="content">
          <div>
            <h1>More than just shorter links</h1>
            <p>
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <a>Get Started</a>
          </div>
          <div className="heroimg">
            <img src="./heroimg.svg" alt="Background image" />
          </div>
        </div>
        <div className="input">
          <div>
            <input type="text" placeholder="Shorten a link here..." />
          </div>
          <div>
            <button>Shorten It!</button>
          </div>
        </div>
        <img src="./searchbg.svg" alt="Search background image" />
      </section>
    </>
  );
}
