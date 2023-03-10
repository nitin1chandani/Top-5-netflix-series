import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt="myPic" className="card__img" />
          <div className="card__info">
            <span className="card__category">{props.sname}</span>
            <h3 className="card__title">{props.title}</h3>
            <a href={props.link}>
              <button>Watch now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
