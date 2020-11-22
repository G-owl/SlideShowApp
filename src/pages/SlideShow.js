import React from 'react';
import SlideShowImg from '../assets/2-nature.jpg';
import { Slide } from 'react-slideshow-image';
import "./SlideShow.styles.css";
import 'react-slideshow-image/dist/styles.css'

const images = [
    SlideShowImg, SlideShowImg, SlideShowImg
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
            </Slide> 
        </div>
     );
}
 
export default SlideShow;