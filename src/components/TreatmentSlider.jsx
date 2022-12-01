import React, { useRef } from "react";
import ControlsSlide from "./ControlsSlide"

import styled from "styled-components";
import Card from "./card";
import Slide from "../styles components/slider/Slide";

const TreatmentsSlider = () => {
  const slideshow = useRef(null);

  return (
    <>
      <ContentSlideTreatment>
        {/* slideshow */}
        <ContentSlideShowTreatments ref={slideshow}>
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
        </ContentSlideShowTreatments>

        <ControlsSlide top="50%" slideshow={slideshow}/>
      </ContentSlideTreatment>
    </>
  );
};



const ContentSlideTreatment = styled.div`
  position: relative;
  justify-content: center;
  display: flex;
  width: 100%;
  overflow-x: hidden;
  overflow-y: visible;
  `;

const ContentSlideShowTreatments = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  height: 50vh;
  width: 70%;
  overflow: hidden;
  margin: 0;
`;



export default TreatmentsSlider;