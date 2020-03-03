import React from "react";
import "./Team.scss";
import { Container } from "react-bootstrap";
import SectionTitle from "../SectionTitle/SectionTitle.js";
import TeamItem from "./TeamItem";
import Bg1 from "../../assets/img/team_1.jpg";
import Bg2 from "../../assets/img/team_2.jpg";
import Bg3 from "../../assets/img/team_3.jpg";

const Team = () => {
    const text =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ";

    const teamItems = [
        {
            bg: Bg1,
            name: 'Matthew Dix',
            position: 'Graphic Design'
        },
        {
            bg: Bg2,
            name: 'Christopher Campbell',
            position: 'Branding/UX design'
        },
        {
            bg: Bg3,
            name: 'Michael Fertig ',
            position: 'Developer'
        }
    ];


    const teamItem = teamItems.map((item, index)=> {
        return <TeamItem key={index}  bg={item.bg} name={item.name} position={item.position}/>
    })
    return (
        <div className="Team">
            <Container>
                <SectionTitle top="Who we are" title="Meet our team" text={text} />
                <div className="team-list row">
                    {teamItem}
                </div>
            </Container>
        </div>
    );
};

export default Team;
