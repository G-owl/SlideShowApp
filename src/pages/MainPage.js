import React from 'react';
import MainImage from '../assets/2-nature.jpg';
import './MainPage.styles.css';

const MainPage = ({ onNext }) => {
    return ( 
        <div className="main-page">
            <img src={MainImage} className="main-img" style={{ height: '98vh'}} />
            <i className="next-btn fas fa-arrow-right" onClick={onNext} />
        </div>
     );
}
 
export default MainPage;