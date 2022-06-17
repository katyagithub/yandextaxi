import React from 'react'
import Header from '../header/Header'
import Promo from '../promo/Promo'
import Start from '../start/Start'
import Advantages from '../advantages/Advantages';
import Application from '../application/Application';
import Contacts from '../contacts/Contacts';
import Connection  from '../connection/Connection';
import Car from '../car/Car'
import Footer from '../footer/Footer'
import './App.css';





const App = () => {
  function smoothScrolls() {
    const anchors = document.querySelectorAll('a[href*="#"]')

    anchors.forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const blockID = anchor.getAttribute('href').slice(1)
        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      })
    })
  }

  smoothScrolls();
  return ( 
    <>    
    <Header/>
    <Promo/>
    <Start/>
    <Advantages/>
    <Application/>
    <Contacts/>
    <Connection/>
    <Car/>
    <Footer/>    
    </>
  );

}

export default App;
