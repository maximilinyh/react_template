import React from "react";
import { Button } from "react-bootstrap";
import "./ButtonSearch.scss";

const ButtonSearch = props => {
  return (
    <Button
      className="header__search-button order-md-3"
      onClick={props.handlerToggle}
      variant="outline-light"
      style={props.style}
    >
      {props.children}
    </Button>
  );
};

export default ButtonSearch;
