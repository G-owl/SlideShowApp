import React from 'react';
import MainImage from '../assets/2-nature.jpg';
import MainBGM from '../assets/rts.mp3';
import './MainPage.styles.css';
var Sound = require('react-sound').default;

const MainPage = ({ onNext }) => {
    return ( 
        <div className="main-page">
            <Sound
      url={MainBGM}
      playStatus={Sound.status.PLAYING}
      volume={10}
    />
            <img src={MainImage} className="main-img" style={{ height: '98vh'}} />
            <i className="next-btn fas fa-arrow-right" onClick={onNext} />
        </div>
     );
}
 
export default MainPage;