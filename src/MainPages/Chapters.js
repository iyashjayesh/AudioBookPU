import React from 'react'
import '../App.css'
import Chaptercard from '../globalComponents/ChapterCard/Chaptercard'
import ch1 from '../img/ch/ch1.png';

const Chapters = () => {
    return (
        <div className="chapter">
            <div className="conatiner text-center mt-3">
                <h1><strong>List of Chapters | अध्याय</strong></h1>
            </div>
            <Chaptercard img1={ch1} path1="/chapter-one" img2={ch1} path2="/chapter-two" img3={ch1} path3="/chapter-three"/>
            <Chaptercard img1={ch1} path1="/chapter-four" img2={ch1} path2="/chapter-five" img3={ch1} path3="chapter-six"/>
        </div>
    )
}

export default Chapters
