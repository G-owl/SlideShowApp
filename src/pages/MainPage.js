import React, { useRef } from "react";
import MainImage from '../assets/d02.jpg';
import MainBGM from '../assets/rts.mp3';
import './MainPage.styles.css';
var Sound = require('react-sound').default;

const MainPage = ({ onNext }) => {
    const inputRef = useRef(null);
    return ( 
        <div className="main-page">
            <audio ref={inputRef} src={MainBGM} controls autoPlay hidden/>
            <img src={MainImage} className="main-img" style={{ height: '98vh'}} />
            <i className="next-btn fas fa-arrow-right" onClick={onNext} />
        </div>
     );
}
 
export default MainPage;