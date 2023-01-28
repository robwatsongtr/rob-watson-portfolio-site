import React from 'react';
import HeroBannerContainer from "../../../container/HeroBanner";
import bannerBg from '../../../assets/images/hero/slider-1.png'
import personalInfo from '../../../data/personalInfo'

const BannerPersonalPortfolio = () => {
    return (
        <HeroBannerContainer bg={bannerBg} overlay={false}>
            <div className="main-slider-content">
                <h2>Hello , I’m</h2>
                <h1>{personalInfo.name}</h1>
                <h2>{personalInfo.designation}</h2>
                <h3>
                    <a 
                        target="_blank" rel="noopener noreferrer" 
                        href={`${process.env.PUBLIC_URL + personalInfo.resumeURL}`}
                    >
                        Download Resume
                    </a>
                </h3>
            </div>
        </HeroBannerContainer>
    );
};

export default BannerPersonalPortfolio;