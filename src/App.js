import React from 'react';
// import NavigationBar from './Components/NavigationBar';
import Navbar from './Components/NavBar'
import MyComponent from './Components/GifComponent'
import MyCarousel from './Components/MyCarousel'
import Section1 from './Components/Section'
import './Components/Global.css'
import SearchBar from './Components/Header';
import Card from './Components/Cards';
import Footer from './Components/Footer';
import BestSeller from './Components/BestSeller';
import HeroSection from './Components/HeroSection';


const App = () => {
    return (
        <>
        <div>
            {/* <NavigationBar /> */}
            <MyComponent/>
            <SearchBar/>
            <Navbar />
            
            <HeroSection/>
            {/* <MyCarousel />
            <Section1 /> */}
            <Card />
            <BestSeller/>
            <Footer/>
            {/* Other content of your app */}
        </div>
        </>
    );
};

export default App;
