import React from 'react';
import ElementsNavbar from '../styles components/navbar/ElementsNavbar'
import ContentSvg from '../styles components/navbar/ContentSvg';
import { ReactComponent as Ubication } from "../media/ubication.svg"
import { ReactComponent as User } from "../media/user.svg"
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Navbar = () =>
{

    return (
        <ElementsNavbar>
            <Alink>
                <Link to='/'>
                    Inicio
                </Link>
            </Alink>
            <p>|</p>
            <p onClick={() =>
            {
                window.scrollBy({
                    top: 500,
                    left: 0,
                    behavior: 'smooth'
                })
            }}
            >Tratamientos</p>
            <p>|</p>
            <p onClick={() => window.scrollBy({
                top: 920,
                left: 0,
                behavior: 'smooth'
            })}
            >Tips</p>
            <p>|</p>
            <ContentSvg>
                <Ubication onClick={() => window.scrollBy({
                    top: 1200,
                    left: 0,
                    behavior: 'smooth'
                })} />
            </ContentSvg>
            <p>|</p>
            <Link to='/profile'>
                <ContentSvg>
                    <User />
                </ContentSvg>
            </Link>
        </ElementsNavbar>
    );
}


const Alink = styled.div`
    background-color:red;
    & link{
        text-decoration: none;
    }
`
export default Navbar;
