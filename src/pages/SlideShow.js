import React from 'react';
import SlideShowImg from '../assets/d1.jpg';
import SlideShowImg1 from '../assets/d2.png';
import SlideShowImg2 from '../assets/d3.png';
import SlideShowImg3 from '../assets/d4.png';
import SlideShowImg4 from '../assets/d5.png';
import { Slide } from 'react-slideshow-image';
import "./SlideShow.styles.css";
import 'react-slideshow-image/dist/styles.css'

const images = [
    SlideShowImg, SlideShowImg1, SlideShowImg2, SlideShowImg3, SlideShowImg4
];

const SlideShow = () => {
    return ( 
        <div className="slide-show">
           <Slide>
                <div className="each-slide">
                    <div style={{'backgroundImage': `url(${images[0]})`}}>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{'backgroundImage': `url(${images[1]})`}}>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{'backgroundImage': `url(${images[2]})`}}>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{'backgroundImage': `url(${images[3]})`}}>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{'backgroundImage': `url(${images[4]})`}}>
                    </div>
                </div>
            </Slide> 
        </div>
     );
}
 
export default SlideShow;