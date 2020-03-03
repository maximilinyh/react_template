import React from "react";
import "./About.scss";
import { Container } from "react-bootstrap";
import SectionTitle from "../SectionTitle/SectionTitle.js";
import AboutItem from "./AboutItem";
import { FaUserAlt, FaImage, FaBlog } from "react-icons/fa";
import Bg1 from "../../assets/img/about_1.jpg";
import Bg2 from "../../assets/img/about_2.jpg";
import Bg3 from "../../assets/img/about_3.jpg";

const About = () => {
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ";

  const aboutItems = [
    {
      link: "./",
      bg: Bg1,
      text: "super team",
      icon: <FaUserAlt />
    },
    {
      link: "./",
      bg: Bg2,
      text: "some of our work",
      icon: <FaImage />
    },
    {
      link: "./",
      bg: Bg3,
      text: "Latest blog",
      icon: <FaBlog />
    }
  ];


const aboutItem = aboutItems.map((item, index)=> {
		return <AboutItem key={index} href={item.link}  bg={item.bg} icon={item.icon} text={item.text}/>
	})
  return (
    <div className="About">
      <Container>
        <SectionTitle top="What we do" title="Story about us" text={text} />
        <div className="about-list row">
	  {aboutItem}
        </div>
      </Container>
    </div>
  );
};

export default About;
