import React from 'react';
import ACard from '../styles components/card/ACard.js';
import NameCard from '../styles components/secondarySlider/NameCard.js';
import { Link } from 'react-router-dom';

const Card = () =>
{
    return (
        <Link to='/productdetail'>
            <ACard>
                <NameCard>Limpieza Facial</NameCard>
            </ACard>
        </Link>
    );
}

export default Card;
