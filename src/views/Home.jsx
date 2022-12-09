import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PrincipalSlider from '../components/PrincipalSlider';
import Red from '../components/Red';
import Tips from '../components/Tips';
import Treatments from '../components/Treatments';
import App from '../App.css'

const Home = () =>
{
    return (
        <div className='App'>
            <Navbar />
            <PrincipalSlider />
            <Treatments />
            <Tips />
            <Red />
            <Footer />
        </div>
    );
}

export default Home;
