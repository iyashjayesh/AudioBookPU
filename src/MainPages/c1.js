import React from 'react';
import Audiocard from '../globalComponents/AudioCard/Audiocard';
import Audiocard2 from '../globalComponents/AudioCard/AudioCard2';
import ch2s1n2 from '../audio/ch2/s1n2.aac'

import ChapterImgbanner from '../globalComponents/ChapterCard/ChapterImgbanner';

import bch1 from '../img/cbanner/bch1.png'

const c1 = () => {
    return (
        <div className="audioCard">
            <ChapterImgbanner img={bch1} />
            <div className="conatiner text-center mt-3">
                <h1><strong>Chapter 1 | अध्याय</strong></h1>
            </div>
            <Audiocard title1="Shlok1" title2="Aholk2" title3="Shlok3" img1="" img2="" img3="" audio1={ch2s1n2} audio2="" audio3=""/>
            <Audiocard title1="Shlok1" title2="Sholk3" title3="Shlok3" img1="" img2="" img3="" audio1="" audio2="" audio3=""/>
            <Audiocard title1="Shlok1" title2="Sholk3" title3="Shlok3" img1="" img2="" img3="" audio1="" audio2="" audio3=""/>
            <Audiocard2 title1="Shlok1" title2="Sholk3" img1="" img2="" audio1="" audio2=""/>

        </div>
    )
}

export default c1
