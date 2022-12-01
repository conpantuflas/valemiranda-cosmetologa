import Controls from "../styles components/slider/Controls";
import Button from "../styles components/slider/Button";

import { ReactComponent as ArrowLeft } from "../media/arrowLeft.svg";
import { ReactComponent as ArrowRight } from "../media/arrowRight.svg";

import React, { useCallback } from 'react';

const ControlsSlide = ({slideshow}) => {

const next = useCallback(() => {
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
      },[]);

    const previous = useCallback(() => {
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
    },[]);



return (
    <Controls>
        <Button izquierdo onClick={previous}>
            <ArrowLeft />
        </Button>
        <Button >
            <ArrowRight onClick={next}/>
        </Button>
    </Controls>
    );
}

export default ControlsSlide;