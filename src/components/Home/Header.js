import React, { useEffect, useRef, useState } from "react";
import StickyHeader from "./StickyHeader";
import { CSSTransition } from "react-transition-group";
import "./Header.scss";

const Header = (props) => {
  const [isSticky, setSticky] = useState(false);

  const ref = useRef(null);

  const handleScroll = () => {
    setSticky(
      ref.current.getBoundingClientRect().top <= -ref.current.offsetHeight
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  return (
    <div
      style={{ height: `${isSticky ? ref.current.offsetHeight + "px" : ""}` }}
      className={`sticky-wrapper${isSticky ? " sticky" : ""}`}
      ref={ref}
    >
      <CSSTransition in={isSticky} timeout={300} classNames="header">
        <StickyHeader children={props.children} />
      </CSSTransition>
    </div>
  );
};

export default Header;
