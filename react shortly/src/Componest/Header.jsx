import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <>
      <header className="header">
        <nav>
          <div>
            <img src="./header_logo.svg" alt="header logo" />
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Resources</a>
          </div>
          <div>
            <a href="#">Login</a>
            <button>Sign Up</button>
          </div>
        </nav>
      </header>
    </>
  );
}
