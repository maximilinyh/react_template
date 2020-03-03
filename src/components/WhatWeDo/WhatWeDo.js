import React, {useState, useRef} from "react";
import {Container, Accordion, Card } from "react-bootstrap";
import {Scrollbars} from "react-custom-scrollbars";
import {IoIosClock, IoMdLaptop, IoMdPaper, IoIosArrowDown} from "react-icons/io";
import {CSSTransition} from "react-transition-group";
import SectionTitle from "../SectionTitle/SectionTitle.js";
import Bg1 from "../../assets/img/whatwedo_1.jpg";
import Bg2 from "../../assets/img/about_2.jpg";
import Bg3 from "../../assets/img/about_3.jpg";
import "./WhatWeDo.scss";



const WhatWeDo = (props) => {
    //title text
    const text =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ";

    //accordion items
    const accordionItems = [
        {
            id: "0",
            icon: <IoIosClock/>,
            head: "Photography",
            content: (
                <>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id{" "}
                    </p>
                    <p>
                        est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis{" "}
                    </p>
                </>
            )
        },

        {
            id: "1",
            icon: <IoMdLaptop/>,
            head: "Сreativity",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            id: "2",
            icon: <IoMdPaper/>,
            head: "Web design",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    ];

    //images array
    const images = [{url: Bg1}, {url: Bg2}, {url: Bg3}];

    //images urls
    const currentBg = images.map(image => {
        return image.url;
    });
//hooks
    const [startImage, setStartImage] = useState(currentBg[0]);
    const [isClicked, setIsClicked] = useState(false);
    const ref = useRef(null);

    const accordionItem = accordionItems.map((item, index) => {

        function handleClickItem() {
            setStartImage(currentBg[index])
            setIsClicked(
                (!isClicked)
            )

            console.log(ref.current)
        }

        return (
            <Card
                key={item.id}
                className="accordion__item mb-2"
            >
                <Accordion.Toggle
                    onClick={handleClickItem}
                    as={Card.Header}
                    eventKey={item.id}
                    className= {'d-flex align-items-center'} {...props}
                >
                    <div className="card-header__icon mr-2">{item.icon}</div>
                    <div className="card-header__text">{item.head}</div>
                    <IoIosArrowDown className="card-header__arrow"/>
                </Accordion.Toggle>

                <Accordion.Collapse eventKey={item.id} ref={ref}>
                    <Scrollbars
                        style={{height: 181}}
                        renderTrackVertical={props => (
                            <div {...props} className="track-vertical"/>
                        )}
                        renderThumbVertical={props => (
                            <div {...props} className="thumb-vertical"/>
                        )}
                    >
                        <Card.Body>{item.content}</Card.Body>
                    </Scrollbars>
                </Accordion.Collapse>
            </Card>
        );
    });

    return (
        <div className="WhatWeDo">
            <Container>
                <SectionTitle top="Service" title="what we do" text={text}/>
                <div className="whatwedo-list row">
                    <div className="col-12 col-md-6">
                        <CSSTransition in={isClicked} timeout={500} classNames="image">
                            <div
                                className="whatwedo-list__image mb-4 mb-md-0"
                                style={{backgroundImage: `url(${startImage})`}}
                            />
                        </CSSTransition>
                    </div>
                    <div className="col-12 col-md-6 overflow-hidden">
                        <div className="whatwedo-list__accordion">
                            <Accordion defaultActiveKey="0" >{accordionItem}</Accordion>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default WhatWeDo;
