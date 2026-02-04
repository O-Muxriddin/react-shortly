import React from "react";
import "./hero.css";
export default function Hero() {
  return (
    <>
      <section className="section_container">
        <div className="content">
          <div className="hero_text">
            <h1>More than just shorter links</h1>
            <p>
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <a className="hero_btn">Get Started</a>
          </div>

          <div className="hero_img">
            <img src="./heroimg.svg" alt="Background image" />
          </div>
        </div>

        <div className="short_box">
          <input
            className="short_input"
            type="text"
            placeholder="Shorten a link here..."
          />
          <button className="short_btn">Shorten It!</button>
        </div>

        <img
          className="search_bg"
          src="./searchbg.svg"
          alt="Search background image"
        />
      </section>
    </>
  );
}
