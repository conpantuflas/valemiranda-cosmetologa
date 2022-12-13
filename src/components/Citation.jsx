import React, { useRef, useState } from 'react';
import { ReactComponent as ArrowRight } from "../media/arrowRight.svg"
import styled from 'styled-components';

const Citation = () =>
{

    //state
    const [inHover, setInHover] = useState(false);
    //ref
    const sizeACitation = useRef()
    const arrow = useRef()

    return (
        <ACitation ref={sizeACitation}
            onMouseEnter={() =>
            {
                arrow.current.style.transform = 'rotate(90deg)'
                setInHover(true)
            }}
            onMouseLeave={() =>
            {
                arrow.current.style.transform = 'rotate(0deg)'
                setInHover(false)
            }}>
            <PreInformation >
                <h2>Mascarilla</h2>
                <ArrowRight ref={arrow}

                />
            </PreInformation>
            {
                inHover != false ? (
                    <SeeMore>
                        <p>hora</p>
                        <p>fecha</p>
                        <p>Valentina Miranda</p>
                    </SeeMore>
                ) : (
                    ""
                )
            }
        </ACitation >
    );
}

const PreInformation = styled.div`
       width: 100% ;
       display: flex;
`

const SeeMore = styled.div`
    height: 2rem;
    display: flex;
    grid-template-columns: 30% 30% 30%;
    width: 100%;
    justify-content: space-around;
    & p{
        color: #fff;
        margin: 0;
    }
`

const ACitation = styled.div`
    width: 95%;
    min-height: 2rem;
    backdrop-filter: blur(15px);
    background-color: #5323434c;
    margin: 0.4rem auto;
    padding:0.5rem 1rem;
    border-radius: 15px;
    fill: #fff;
    & h2{
        margin:  0;
        padding:0.2rem;
        color: #fff;
        font-weight: 300;
        font-size: 1rem;
    }
`

export default Citation;
