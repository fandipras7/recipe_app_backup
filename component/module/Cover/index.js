import React from "react";
import style from "./cover.module.css";

const Cover = () => {
  return (
    <div className={`${style.background} col-md-6`}>
      <div className={`${style.bgcolor}`}>
        <img src="/assets/img/logo.png " className={style.logo} alt="" />
      </div>
    </div>
  );
};

export default Cover;
