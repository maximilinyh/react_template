import React from "react";
import "./SectionTitle.scss";

const SectionTitle = props => {
  return (
    <div className="section__head text-center">
      <p className="section__top"> {props.top} </p>
      <h3 className="section__title decorate-border decorate-border--red">
        {props.title}
      </h3>
      <p className="section__text"> {props.text} </p>
    </div>
  );
};

export default SectionTitle;
