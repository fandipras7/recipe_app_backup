import React from "react";
// import styles from "./input.module.css";

const Input = ({ width, border, className, type, children, ...props }) => {
  return (
    <div>
      <input style={{ width: width, border: border }} type={type} className={className} {...props}>
        {children}
      </input>
    </div>
  );
};

export default Input;
