import React from "react";
import "./main.css";
export default function Main() {
  return (
    <main className="main-sec">
      <div className="info-main">
        <h1>Advanced Statistics</h1>
        <p>
          Track how your links are performing across the web with <br />{" "}
          <span>our advanced statistics dashboard.</span>
        </p>
      </div>
      <span className="line">
        <img src="./mainline.svg" alt="line" />
      </span>
      <div className="cards-cont">
        <div className="firstcard">
          <span>
            <button>
              <img src="./brand.svg" alt="brand svg" />
            </button>
            <h2>Brand Recognition</h2>
            <p>
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </span>
        </div>
        <div className="secondcard">
          <span>
            <button>
              <img src="./detail.svg" alt="brand svg" />
            </button>
            <h2>Detailed Records</h2>
            <p>
              Gain insights into who is clicking your links. <br /> Knowing when
              and where people engage with your <br /> content helps inform
              better decisions.
            </p>
          </span>
        </div>
        <div className="thirdcard">
          <span>
            <button>
              <img src="./fully.svg" alt="brand svg" />
            </button>
            <h2>Fully Customizable</h2>
            <p>
              Improve brand awareness and content <br /> discoverability through
              customizable links, <br /> supercharging audience engagement.
            </p>
          </span>
        </div>
      </div>
    </main>
  );
}
