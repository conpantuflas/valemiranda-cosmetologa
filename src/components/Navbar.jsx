import React from 'react';
import ContentNavbar from '../styles components/navbar/ContentNavbar';
import Name from '../styles components/navbar/Name'
import Profession from '../styles components/navbar/Profession'
import ElementsNavbar from '../styles components/navbar/ElementsNavbar'
import Logo from '../styles components/navbar/Logo'
import { ReactComponent as Ubication } from "../media/ubication.svg"
import { ReactComponent as User } from "../media/user.svg"


const Navbar = () => {


    return (
        <ContentNavbar>
            <Logo>
                <Name>Vale</Name>
                <Name>Miranda</Name>
                <Profession>Cosmetologa</Profession>
            </Logo>
            <ElementsNavbar>
                <p>Inicio</p>
                <p>|</p>
                <p onClick={()=>{
                    window.scrollBy({
                        top: 500,
                        left: 0,
                        behavior: 'smooth'
                    })
                }}
                >Tratamientos</p>
                <p>|</p>
                <p onClick={()=>window.scrollBy({
                      top: 920,
                      left: 0,
                      behavior: 'smooth'
                })}
                >Tips</p>
                <p>|</p>
                <Ubication onClick={()=>window.scrollBy({
                    top: 1200,
                    left: 0,
                    behavior: 'smooth'
                    }) }/>
                <p>|</p>
                <User/>
            </ElementsNavbar>
        </ContentNavbar>
    );
}

export default Navbar;
