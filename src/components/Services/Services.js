import React from "react";
import "./Services.scss";
import { Container } from "react-bootstrap";
import SectionTitle from "../SectionTitle/SectionTitle.js";
import ServicesItem from "./ServicesItem";
import { IoIosClock, IoMdTrendingUp, IoMdLaptop, IoMdPaper, IoIosHome, IoIosQrScanner} from "react-icons/io";

const Services = () => {
  const servicesItems = [
    {id: 1, icon: <IoIosClock />, title: "Photography", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." },
    {id: 2, icon: <IoMdTrendingUp />, title: "Web Design", text: "Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." },
    {id: 3, icon: <IoMdLaptop />, title: "Creativity", text: "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." },
    {id: 4, icon: <IoMdPaper />, title: "Seo", text: "Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod." },
    {id: 5, icon: <IoIosHome />, title: "Css/Html", text: "Lorem dolor sit amet, consectetur adipiscing elit, sed do tempor." },
    {id: 6, icon: <IoIosQrScanner />, title: "Digital", text: "Sit amet, consectetur adipiscing elit, sed do eiusmod tempor." }
  ];

const servicesItem = servicesItems.map((item)=> {
		return <ServicesItem key={item.id} icon={item.icon} title={item.title} text={item.text}/>
	})



  return (
    <div className="Services">
      <Container>
        <SectionTitle top="We work with" title="Amazing Services" />
        <div className="services-list">
          <div className="row" >{servicesItem}</div>
        </div>
      </Container>
    </div>
  );
};

export default Services;
