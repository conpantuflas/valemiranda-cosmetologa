import React,{useState} from 'react';
import img from '../media/mapa.png'
import styled from 'styled-components';

const Footer = () => {

    const [inHover, setInHover] = useState(false);

    return (
        <AFooter>
            <Map>
                <a href="https://www.google.com/maps/place/Azores+Nte.+645,+8152750+Puente+Alto,+Regi%C3%B3n+Metropolitana/@-33.5937318,-70.586295,16.32z/data=!4m5!3m4!1s0x9662d71099eef1c1:0xcc1cb5974395cf8a!8m2!3d-33.5933782!4d-70.5866745" target="_blank"
                    onMouseEnter={() => setInHover(true)}
                    onMouseLeave={() => setInHover(false)}
                >
                <img src={img} alt='mapa'
                />
                 {inHover != false ? (
                <Text>Click me!</Text>
              ) : (
                ""
              )}
                </a>
            </Map>
        </AFooter>
    );
}

const AFooter = styled.div`
    background-color: #cab1b5;
    width: 100%;
    height: 55vh;
    `

const Map = styled.div`
    padding: 3rem;
    & img{
        border-radius: 15px;
        width: 50%;
        height: 40vh;
        object-fit: cover;
        object-position: center;
        &:hover{
            transition: 1000ms ease-out all;
            filter: brightness(50%);
            cursor: pointer;
        }
    }
    & a{
        text-decoration: none;
    }
    `

const Text = styled.p`
    color:#fff;
    font-weight: 800;
    text-align: center;
    margin-top: -5rem;
    position: relative;
`

export default Footer;
