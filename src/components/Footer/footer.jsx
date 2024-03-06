import React from "react";
import "../Footer/footer.css";
import ig from "../../images/ig.png";
import fb from "../../images/fb.png";
import x from "../../images/x.png";
import tt from "../../images/tt.webp";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socials">
        <a href="https://www.instagram.com/">
          <img src={ig} width={50} height={50} alt="pic" />{" "}
        </a>
        <a href="https://www.facebook.com/">
          {" "}
          <img src={fb} width={50} height={50} alt="pic" />{" "}
        </a>
        <a href="https://twitter.com/" target="self">
          {" "}
          <img src={x} width={50} height={50} alt="pic" />
        </a>
        <a href="https://www.tiktok.com/">
          <img src={tt} width={50} height={50} alt="pic" />
        </a>
      </div>
      <p> copyright &copy;2024;WOW WOW</p>
    </div>
  );
};

export default Footer;
