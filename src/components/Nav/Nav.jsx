import React from "react";
import "../Nav/nav.css";
import logo2 from "../../images/logo2.jpg";
const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo2} width={160} height={150} alt="" />
      <ul>
        <li> Home</li>
        <li> menu</li>
        <li> Feedback</li>
      </ul>
      <div className=" searchbox">
        <input type="text" placeholder="Search Food " />
      </div>
    </div>
  );
};

export default Navbar;
