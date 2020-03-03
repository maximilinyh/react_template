import React from "react";
import "./AboutItem.scss";

const AboutItem = props => {
  return (
    <div className="col-12 col-md-4 mb-4">
      <a
        href={props.href}
        className="about-list__item decorate-gradient d-flex justify-content-center align-items-center"
        style={{ backgroundImage: `url(${props.bg})` }}
      >
        <span className="about-list__info decorate-gradient__info">
          <span className="about-list__icon">{props.icon}</span>
          <span className="about-list__text">{props.text}</span>
        </span>
      </a>
    </div>
  );
};

export default AboutItem;
