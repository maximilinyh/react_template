import React from "react";
import "./ServicesItem.scss";

const ServicesItem = props => {
  return (
    <div className="col-12 col-sm-6 col-md-4">
      <div className="services-list__item d-flex justify-content-center justify-content-sm-start">
        <div className="services-list__icon mr-4">{props.icon}</div>
        <div className="services-list__content">
          <div className="services-list__title mb-2">{props.title}</div>
          <div className="services-list__text">{props.text}</div>
        </div>
      </div>
    </div>
  );
};

export default ServicesItem;
