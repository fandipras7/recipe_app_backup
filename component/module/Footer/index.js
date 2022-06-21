import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div>
      <div className={styles.footer + " row text-center align-items-center"}>
        <div className="col">
          <p className="fs-3">Eat, Cook, Repeat</p>
          <p>Share your best recipe by uploading here !</p>
        </div>
        <ul className={styles.list}>
          <li>Product</li>
          <li>Company</li>
          <li>Learn More</li>
          <li>Get in touch</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
