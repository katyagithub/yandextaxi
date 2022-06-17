import React from 'react'
import whatsup from "../../img/whatsup.svg"
import viber from "../../img/viber.png"
import './Contacts.css'

const Contacts = () =>{
    return(
        <section id='contacts' className="contacts">
            <div className='container'>
                <h2 className='title'>Контакты</h2>
                <div className="contacts__items">
                    <div className="contacts__item">
                        <a href="#whatsup" className="contacts__item-link">
                            <img src={whatsup} alt="whatsup" className="contacts__soc-icon-whatsup"/>
                            Написать в What`s App
                        </a>
                    </div>
                    <div className="contacts__item">
                        <span>тел.: </span>
                        <a href="tel:+73812494645" className="contacts__link">8 (3812) 49-46-45</a>
                    </div>
                    <div className="contacts__item">
                        <span>Email: </span>
                        <a href="mailto:info@taxi.ru" className="contacts__link">info@taxi.ru</a>
                    </div>
                    <div className="contacts__item">
                        <a href="#viber" className="contacts__item-link">
                            <img src={viber} alt="viber" className="contacts__soc-icon-viber"/>
                            Написать в Viber
                        </a>
                    </div>
                    <div className="contacts__item">
                        <span>тел.: </span>
                        <a href="tel:+7903000000" className="contacts__link">8 (903) 00-00-00</a>
                    </div>
                    <div className="contacts__item">
                        <span>Офис: </span>
                        <div className="contacts__link contacts__link_disable">
                            г.Омск, ул.Дмитриева 15/1
                            <a href="#map" target="_blank" className="contacts__link contacts__link-map">Показать на карте</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacts;