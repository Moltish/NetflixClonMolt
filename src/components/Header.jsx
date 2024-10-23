import React, { useState, useEffect } from "react";
import "../components/Header.css";
import netflixLogo from "../assets/Netflix.png";
import profilePicture from "../assets/profile.png";

function Header() {
  const [show, handleShow] = useState(false);
  //   useEffect(() => {
  //     window.addEventListener("scroll", () => {
  //       if (window.scrollY > 100) {
  //         handleShow(true);
  //       } else handleShow(false);
  //     });
  //     return () => {
  //       window.removeEventListener("scroll");
  //     };
  //   }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  useEffect(() => {
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleScroll() {
    if (window.scrollY > 5) {
      handleShow(true);
    } else handleShow(false);
  }

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="header_left">
        <ul>
          <li>
            <img className="nav__logo" src={netflixLogo} alt="Netflix Logo" />
          </li>
          <li>Home</li>
          <li>TV shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className="header_right"></div>

      <img className="nav__avatar" src={profilePicture} alt="Avatar logo" />
    </div>
  );
}

export default Header;
