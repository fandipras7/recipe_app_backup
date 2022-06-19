import React from "react";

const Label = ({ className, htmlFor, title, width }) => {
  return (
    <div>
      <label style={{ width: width }} htmlFor={htmlFor} className={className}>
        <span className="fw-light">{title}</span>
      </label>
    </div>
  );
};

export default Label;
