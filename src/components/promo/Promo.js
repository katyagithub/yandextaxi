import './Promo.css'
import React from 'react'
import promo from '../../img/promo.png'

const Promo = () =>{
    return (
        <section className="promo">
            <div className='container'>
                <div className="promo__inner">
                    <h1 className="promo__title">Зарабатывайте от&nbsp;50 000<span>р</span> в месяц</h1>                
                    <ul className='promo__descr'>
                        <li className='promo__point'>Подключение за 5 минут</li> 
                        <li className='promo__point'>Работайте тогда, когда удобно</li>
                        <li className='promo__point'>Крупнейший автопарк в г.Омске</li>
                    </ul>
                    <button className='promo__btn'>
                        Заполнить анкету
                    </button>
                </div>
                <img src={promo} alt="promo" className="promo__img" /> 
            </div>
      </section>
    );
  }

  export default Promo;