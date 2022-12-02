import React from 'react';
import ImageSecondarySlide from '../styles components/secondarySlider/ImageSecondarySlide';
import SecondarySlider from './SecondarySlider';
import lila from "../media/lila.jpg"

const Tips = ({bgImg}) => {
    return (
        <ImageSecondarySlide bgImg={lila}>
            <h2>Tips</h2>
         <SecondarySlider/>
        </ImageSecondarySlide>
    );
}

export default Tips;
