import React from "react";
import "../Body/food.css";
import Street from "../../images/6-Best-Kenyan-Street-Food-You-May-Like-To-Try.jpg";
import mtush from "../../images/mtush.jpg";
import mtushhh from "../../images/mtushhh.jpg";
import njiva from "../../images/njiva.webp";
import smocha from "../../images/smocha.webp";

const Body = () => {
  return (
    <div>
      <div class="food">
        <img src={Street} width={210} height={180} alt="pic" />
        <img src={mtush} width={210} height={180} alt="pic" />
        <img src={mtushhh} width={210} height={180} alt="pic" />
        <img src={njiva} width={210} height={180} alt="pic" />
        <img src={smocha} width={210} height={180} alt="pic" />
      </div>

      <button class="btn">CLICK HERE FOR MORE </button>
    </div>
  );
};

export default Body;
