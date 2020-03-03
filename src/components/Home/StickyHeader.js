import React from "react";

const StickyHeader = props => {
  return (
    <header className="header sticky-inner" role="banner">
      <div className="container"> {props.children}</div>
    </header>
  );
};

export default StickyHeader;
