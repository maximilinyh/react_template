import React, {useState} from 'react';
import { Container, Carousel } from "react-bootstrap";
import {IoIosClock, IoMdLaptop, IoMdPaper, IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import './QuoteSlider.scss';

const QuoteSlider= () => {
    //use state
    const [index, setIndex] = useState(0);
    function handleSelect(selectedIndex, e) {
        setIndex(selectedIndex);
    }

    //slider content
    const sliderItems = [
        {id: 1,
            image: <IoIosClock/>,
            content: <>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."</>,
            author: 'Jon Doe'
        },
        {id: 2,
            image: <IoMdLaptop/>,
            content: <>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"</>,
            author: 'Ivan Ivanov'
        },
        {id: 3,
            image: <IoMdPaper/>,
            content: <>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."</>,
            author: 'Sam Johnson'
        },
    ]

    //slider item

    const sliderItem = sliderItems.map((item)=>{
        return (
            <Carousel.Item key={item.id}>
                <div className='carousel-item__inner d-flex align-items-center'>
                    <div className='carousel-item__image d-none d-md-flex'>
                        {item.image}
                    </div>
                    <div className='carousel-item__content'>
                        <div className='carousel-item__text'>
                            {item.content}
                        </div>
                        <div className='carousel-item__author border-decorate-left'>
                            {item.author}
                        </div>
                    </div>
                </div>
            </Carousel.Item>
        );
    })

    return(
        <div className='QuoteSlider'>
            <Container>
                <Carousel
                    activeIndex={index}
                    onSelect={handleSelect}
                    interval={null}
                    indicators={false}
                    nextIcon=<IoIosArrowForward/>
                    prevIcon=<IoIosArrowBack/>
                >
                    {sliderItem}
                </Carousel>

            </Container>

        </div>

    );
}

export default QuoteSlider;
