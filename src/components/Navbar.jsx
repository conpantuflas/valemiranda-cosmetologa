import React from 'react';
import ContentNavbar from '../styles components/navbar/ContentNavbar';
import Name from '../styles components/navbar/Name'
import Profession from '../styles components/navbar/Profession'
import ElementsNavbar from '../styles components/navbar/ElementsNavbar'
import Logo from '../styles components/navbar/Logo'

const Navbar = () => {
//------------------------------------------FUNCIONALIDAD PENDIENTE: scrollIntoView()
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
                <p>Tratamientos</p>
                <p>|</p>
                <p>Blogs</p>
                <p>|</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 6.243 6.377 6.903 8 16.398 1.623-9.495 8-10.155 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.342-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>
                <p>|</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z"/></svg>
            </ElementsNavbar>
        </ContentNavbar>
    );
}

export default Navbar;
