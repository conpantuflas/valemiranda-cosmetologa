import React, { useState } from 'react';
import img from '../media/mapa.png'


import AFooter from '../styles components/footer/AFooter';
import Map from '../styles components/footer/Map';
import Text from '../styles components/footer/Text';

const Footer = () =>
{

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



export default Footer;
