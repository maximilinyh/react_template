import React from "react";
import "./FactsItem.scss";

const FactsItem = props => {
  return (
    <div className="facts-list__item col-6 col-md-4 col-lg d-flex flex-column justify-content-center  px-2 ">
      <div ref={props.refer} className="facts-list__title">
        {props.title}
      </div>
      <div className="facts-list__text">{props.text}</div>
    </div>
  );
};

export default FactsItem;
