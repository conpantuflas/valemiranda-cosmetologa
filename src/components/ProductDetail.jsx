import React from 'react';
import img from "../media/lila.jpg"
import styled from 'styled-components';
import bg from '../media/imgBg.jpg'
import Nabvar from './Navbar'
import { Link } from 'react-router-dom';

const ProductDetail = () =>
{
    return (
        <ContentProductDetail>
            <Nabvar />
            {/*img and details*/}
            <SecondaryContent>
                <GeneralInformation>
                    <img src={img} alt='img' />
                    <ul>
                        <p>que pagaras?</p>
                        <li>jjjjjjjj</li>
                        <li>jjjjjjjj</li>
                        <li>jjjjjjjj</li>
                        <li>jjjjjjjj</li>
                        <li>jjjjjjjj</li>
                    </ul>
                </GeneralInformation>
                {/*card of details*/}
                <Description>
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
                </Description>
            </SecondaryContent>
            <Link to='/citation'>
                <Button>Agenda aqui</Button>
            </Link>
        </ContentProductDetail>
    );
}


const ContentProductDetail = styled.div`
    background-image: url(${bg});
    background-size: cover;
    height: 105vh;
    `

const SecondaryContent = styled.div`
    display: flex;
    width: 80%;
    min-height: 50vh;
    margin: 3rem auto;
    display: grid;
    grid-template-columns: 50% 50%;
    backdrop-filter: blur(60px);
    border-radius:15px;
`

const GeneralInformation = styled.div`
  padding: 2rem;
  & img{
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    height: 30vh;
    object-fit: cover;
  }
`
const Description = styled.div`
      padding: 2rem;
`
const Button = styled.button`
    display: flex;
    justify-content: center;
    margin: -1rem  auto 0 auto;
    color: magenta;
    background-color: #fff;
    border: none;
    padding: 1rem;
    border-radius: 15px;
`

export default ProductDetail;
