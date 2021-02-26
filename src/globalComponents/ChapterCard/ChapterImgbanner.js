import React from 'react'
import { Carousel } from 'react-bootstrap';
// import { Link }from 'react-router-dom';
import '../../App.css'

const ChapterImgbanner = (props) => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={props.img}
                    alt="Chapter one Banner"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default ChapterImgbanner
