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


const App = () => {
    return (
        <div>
            {/* <NavigationBar /> */}
            <SearchBar/>
            <Navbar />
            <MyComponent />
            {/* <MyCarousel />
            <Section1 /> */}
            <Card imageSrc="https://beta.lswdistro.com/files/EARTH%20KRATOM%20150CT%20CAPSULES.jpeg" title="EARTH KRATOM 150CT CAPSULES" text="500$" />
            <Card imageSrc="https://beta.lswdistro.com/files/EARTH%20KRATOM%20150CT%20CAPSULES.jpeg" title="EARTH KRATOM 150CT CAPSULES" text="500$" />
            <Card imageSrc="https://beta.lswdistro.com/files/EARTH%20KRATOM%20150CT%20CAPSULES.jpeg" title="EARTH KRATOM 150CT CAPSULES" text="500$" />
            <Card imageSrc="https://beta.lswdistro.com/files/EARTH%20KRATOM%20150CT%20CAPSULES.jpeg" title="EARTH KRATOM 150CT CAPSULES" text="500$" />
            <Footer/>
            {/* Other content of your app */}
        </div>
    );
};

export default App;
