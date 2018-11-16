import React from "react";
import "../../styles/navbar.scss";

const navbar = () => {
  return (
    <div className="navbar">
      <h2 className="navbar__logo">Registration system</h2>
      <div className="navbar__buttons">
        {/* <button className="navbar__button navbar__button__sign-up">
          Sign Up
        </button> */}
        <button className="navbar__button navbar__button__sign-up">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default navbar;
