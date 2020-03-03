import React from "react";
import Background from "../../assets/img/bg_home.jpg";
import "./Home.scss";
import { Container } from "react-bootstrap";
import Header from "./Header";
import NavTop from "./NavTop";
import MainSlider from "./MainSlider";

const Home = () => {
  //bg layout
  const style = {
    bg: {
      backgroundImage: `linear-gradient(to top, rgba(252, 227, 138, 0.9) 0%, rgba(243, 129, 129, 0.9) 100%), url(${Background})`
    }
  };
  return (
    <div className="Home" style={style.bg}>
      <Container>
        <Header>
          <NavTop/>
        </Header>
        <MainSlider />
      </Container>
    </div>
  );
};

export default Home;
