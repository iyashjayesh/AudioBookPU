import React from 'react'
import Slider from '../globalComponents/Slider/Slider'
import Chapters from './Chapters';

const home = () => {
    return (
        <div className="home app">
            <Slider/>
            <Chapters/>
        </div>
    )
}

export default home
