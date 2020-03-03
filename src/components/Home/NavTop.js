import React, { useState } from "react";
import "./NavTop.scss";
import { Nav, Navbar } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";
import { IoIosMenu, IoIosClose, IoIosSearch } from "react-icons/io";
import ButtonSearch from "./ButtonSearch";
import SearchHeader from "./SearchHeader";

const NavTop = props => {
  //show searchpanel state
  const [show, setShow] = useState(false);
  function showSearchPanel() {
    setShow(!show);
  }

  //nav links
  const NavLinks = [
    { id: 1, name: "about", href: "#about" },
    { id: 2, name: "service", href: "#services" },
    { id: 3, name: "work", href: "#work" },
    { id: 4, name: "blog", href: "#blog" },
    { id: 5, name: "contact", href: "#contact" }
  ];

  //nav link
  const NavLink = NavLinks.map(link => {
    return (
      <Nav.Link key={link.id} href={link.href} className="mr-md-5">
        {link.name}
      </Nav.Link>
    );
  });

  const iconStyles = {
    color: "#fff",
    border: "none",
    outline: "none",
    fontSize: "1.5rem",
    lineHeight: 0,
    backgroundColor: "transparent"
  };

  return (
    <>
      <Navbar role="navigation" expand="md" className="pl-0 pr-0 ">
        <Navbar.Brand href="#home" className="order-0 order-md-0">
          MoGo
        </Navbar.Brand>
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="mr-md-3 navbar-right order-2 order-md-1"
        >
          <Nav className="ml-auto ">{NavLink}</Nav>
        </Navbar.Collapse>
        <Navbar.Toggle
          style={iconStyles}
          className="mr-md-3 ml-auto order-1 order-md-2 p-0"
          children={<IoIosMenu />}
          aria-controls="basic-navbar-nav"
        />

        <ButtonSearch
          style={iconStyles}
          handlerToggle={showSearchPanel.bind(this)}
        >
          {show ? <IoIosClose /> : <IoIosSearch />}
        </ButtonSearch>
      </Navbar>
      <CSSTransition in={show} timeout={500} classNames="search" unmountOnExit>
        <SearchHeader />
      </CSSTransition>
    </>
  );
};

export default NavTop;
