import React, { useRef } from "react";
import Content from "../styles components/slider/Content";
import ContentrSlideShow from "../styles components/slider/ContentrSlideShow";
import Slide from "../styles components/slider/Slide";
import Controls from "../styles components/slider/Controls";
import Button from "../styles components/slider/Button";

import { ReactComponent as ArrowLeft } from "../media/arrowLeft.svg";
import { ReactComponent as ArrowRight } from "../media/arrowRight.svg";

import img1 from "../media/mask-in-face.jpg";
import img2 from "../media/mask.jpg";
import img3 from "../media/serum.jpg";

const PrincipalSlider = () => {

  const slideshow = useRef(null);

  const next = () => {
    if (slideshow.current.children.length > 0) {

      const firstElemento = slideshow.current.children[0];
      slideshow.current.style.transition = `300ms ease-out all`;

      const sizeSlider = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${sizeSlider}px)`;

      const transition = () => {
        slideshow.current.style.transition = `none`;
        slideshow.current.style.transform = `translateX(0)`;
        slideshow.current.appendChild(firstElemento);

        slideshow.current.removeEventListener("transitionend", transition);
      };

      slideshow.current.addEventListener("transitionend", transition);
    }
  };

  const previous = () => {
    if (slideshow.current.children.length > 0) {
      const index = slideshow.current.children.length - 1;
      const lastElemento = slideshow.current.children[index];
      slideshow.current.insertBefore(
        lastElemento,
        slideshow.current.firstChild
      );

      slideshow.current.style.transition = `none`;
      const sizeSlider = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${sizeSlider}px)`;

      setTimeout(() => {
        slideshow.current.style.transition = `300ms ease-out all`;
        slideshow.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };

  return (
    <Content>
        <ContentrSlideShow ref={slideshow}>
          <Slide>
            <img src={img1} alt="img" />
          </Slide>

          <Slide>
            <img src={img2} alt="img" />
          </Slide>

          <Slide>
            <img src={img3} alt="img" />
          </Slide>
        </ContentrSlideShow>

        {/* controles */}
        <Controls>
          <Button izquierdo onClick={previous}>
            <ArrowLeft />
          </Button>
          <Button >
            <ArrowRight onClick={next}/>
          </Button>
        </Controls>
    </Content>
  );
};



export default PrincipalSlider;