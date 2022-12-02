import React from 'react';
import SecondarySlider from "../components/SecondarySlider"
import ImageSecondarySlide from '../styles components/secondarySlider/ImageSecondarySlide';
import flowerBlue from "../media/flower-blue.jpg"

const Treatments = ({bgImg}) => {
    return (
        <ImageSecondarySlide bgImg={flowerBlue}>
            <h1>Treatments</h1>
            <SecondarySlider/>
        </ImageSecondarySlide>
    );
}


export default Treatments;
