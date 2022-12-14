import React from 'react';
import img from "../media/lila.jpg"
import styled from 'styled-components';

const ProductDetail = () =>
{
    return (
        <div>
            {/*img and details*/}
            <div>
                <Img src={img} alt='img' />
                <ul>
                    <li>jjjjjjjj</li>
                    <li>jjjjjjjj</li>
                    <li>jjjjjjjj</li>
                    <li>jjjjjjjj</li>
                    <li>jjjjjjjj</li>
                </ul>
            </div>
            {/*card of details*/}
            <div>
                <p>nombre tratamineto</p>
                <p>description Duis commodo duis esse deserunt qui pariatur eiusmod dolore excepteur ad
                    pariatur do. Culpa aliqua consequat amet elit et pariatur nostrud magna commodo Lorem
                    minim officia pariatur. Irure occaecat amet Lorem ex. Occaecat consectetur officia
                    voluptate tempor. Dolore duis pariatur labore anim veniam incididunt eiusmod aliquip
                    qui Lorem esse sint cupidatat ad. Proident adipisicing tempor culpa laboris officia
                    exercitation dolore proident labore mollit. Nostrud culpa in ipsum nulla incididunt
                    nostrud ipsum irure laboris reprehenderit reprehenderit.nt nostrud id. Ullamco deserunt
                    ea qui deserunt enim consequat tempor dolor cillum voluptate magna nisi mollit et. Do
                    labore ut nisi amet laboris mollit nulla eu nostrud do in. Esse laborum exercitation
                    tempor dolor fugiat cupidatat commodo laborum labore sit cupidatat magna. Magna cupidatat
                    aliqua adipisicing ea laborum incididunt id pariatur.
                </p>
            </div>
            <button>Agenda aqui</button>
        </div>
    );
}

const Img = styled.img`
    width: 30%;
    height: 30vh;
    object-fit: cover;
`

export default ProductDetail;
