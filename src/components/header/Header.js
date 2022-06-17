import React from 'react'
import logo from '../../img/logo.svg';
import './Header.css'
// import  './Header.css'

const Header = () =>{
    return (
      <header className='header'>
        <div className='container'>
          <div className="header__inner">
            <div className="header__logo-info">
              <img src={logo} alt="Logo" className="header__logo" />
              <div className='header__about'>
                Официальный партнер г.Омск
              </div>
            </div>
            <nav className='header__nav'>
              <li><a href="#start" className="header__anchor">Начало работы</a></li>
              <li><a href="#advantages" className="header__anchor">Преимущества работы</a></li>
              <li><a href="#application" className="header__anchor">Приложение</a></li>
              <li><a href="#contacts" className="header__anchor">Контакты</a></li>
            </nav>
            <div className='header__call'>
              <div className='header__number'>8 (3812) 49-46-45</div>
              <a href="tel:+73812494645" className='header__order-call'>заказать звонок</a>
            </div>
          </div>
        </div>
      </header>
    );
  }

  export default Header;