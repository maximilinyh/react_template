import React from "react";
import "./App.scss";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Facts from "./components/Facts/Facts";
import Services from "./components/Services/Services";
import Devices from "./components/Devices/Devices";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";
import QuoteSlider from "./components/QuoteSlider/QuoteSlider";
import Team from "./components/Team/Team";


const App = () => {
    return (
        <div
            className="App"
        >
            <section className="section #home">
                <Home/>
            </section>
            <section className="section #about">
                <About/>
            </section>
            <section className="section #facts">
                <Facts/>
            </section>
            <section className="section #services">
                <Services/>
            </section>
            <section className="section #devices">
                <Devices/>
            </section>
            <section className="section #whatwedo">
                <WhatWeDo/>
            </section>
            <section className="section #quoteslider">
                <QuoteSlider/>
            </section>
            <section className="section #team">
                <Team/>
            </section>
        </div>
    );
};

export default App;
