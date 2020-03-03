import React from 'react';
import { Container } from "react-bootstrap";
import SectionTitle from "../SectionTitle/SectionTitle.js";
import './Devices.scss';
import Background from "../../assets/img/bg_design.jpg";
import DevicesBg from "../../assets/img/devices.png";

const Devices = () => {
    const style = {
        bg: {
            backgroundImage: `url(${Background})`
        },
        devices: {
            backgroundImage: `url(${DevicesBg})`
        }
    }
    return(
        <div className="Devices" style={style.bg}>
            <Container>
                <SectionTitle top="For all devices" title="Unique design" />
                <div className='devices__inner' style={style.devices}></div>
            </Container>
        </div>

    );


}

export default Devices;
