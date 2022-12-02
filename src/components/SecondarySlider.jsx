import React, { useRef } from "react";
import ControlsSlide from "./ControlsSlide"

import styled from "styled-components";
import Card from "./card";
import Slide from "../styles components/slider/Slide";
import ContentSlideSecondary from "../styles components/secondarySlider/ContentSlideSecondary";

const SecondarySlider = () => {
  const slideshow = useRef(null);

  return (
    <>
      <ContentSlideSecondary>
        {/* slideshow */}
        <ContentSlideShowSecondary ref={slideshow}>
          <Slide overflow="none" minwidth="12rem">
            <Card />
          </Slide>
          <Slide overflow="none" minwidth="12rem">
            <Card />
          </Slide>
          <Slide overflow="none" minwidth="12rem">
            <Card />
          </Slide>
          <Slide overflow="none" minwidth="12rem">
            <Card />
          </Slide>
          <Slide overflow="none" minwidth="12rem">
            <Card />
          </Slide>
          <Slide overflow="none" minwidth="12rem">
            <Card />
          </Slide>
        </ContentSlideShowSecondary>

        <ControlsSlide top="50%" slideshow={slideshow}/>
      </ContentSlideSecondary>
    </>
  );
};





const ContentSlideShowSecondary = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  height: 55vh;
  width: 85%;
  overflow: hidden;
  margin: 0;
`;



export default SecondarySlider;