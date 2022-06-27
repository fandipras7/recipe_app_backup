import React from "react";

const Card = ({ img, title, onClick, ...props }) => {
  return (
    <>
      <div className="card p-2 mb-5">
        <div>
          <img className="img-fluid" src={img} alt="" />
        </div>
        <div className="card-body">
          <h5 onClick={onClick} className="card-title text-center">
            {title}
          </h5>
          {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
        </div>
      </div>
    </>
  );
};

export default Card;
