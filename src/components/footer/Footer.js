import React from 'react'
import './Footer.css'

const Footer = () =>{
    return(
        <footer className="footer">
            <div className='container'>
                <div className='footer__inner'>
                    <div className='footer__creds'>
                        <div className='footer__creds-item'>Официальный партнер Яндекс Такси г.Омск</div>
                        <div className='footer__creds-item footer__creds-item_big'>ОГРНИП 12345432112344</div>
                    </div>
                    <nav className='footer__links'>
                        <li><a href="#start" className="footer__link">Начало работы</a></li>
                        <li><a href="#advantages" className="footer__link">Преимущества работы</a></li>
                        <li><a href="#advantages" className="footer__link">Отзывы</a></li>
                        <li><a href="#application" className="footer__link">Приложение</a></li>
                        <li><a href="#contacts" className="footer__link">Контакты</a></li>
                    </nav>
                    <a href='#policy' target="_blank" className='footer__policy'>Политика конфиденциальности</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;