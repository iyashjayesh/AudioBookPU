import React from 'react'
import { Carousel } from "react-bootstrap";
import homePage from '../../img/homePage.jpg';
import homePage2 from '../../img/homePage2.jpg';
import '../../App.css';


const Slider = () => {
    return (
        <div className="slider-font">
           <Carousel>
                <Carousel.Item interval={1200}>
                    <img
                    className="d-block w-100"
                    src={homePage2}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1600}>
                    <img
                    className="d-block w-100"
                    src={homePage}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                    className="d-block w-100"
                    src={homePage2}
                    alt="Third slide"
                    />
                </Carousel.Item>
                </Carousel> 
        </div>
    )
}

export default Slider
