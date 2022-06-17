import React from 'react'
import schedule from "../../img/schedule.svg"
import money from "../../img/money.svg"
import programm from "../../img/programm.svg"
import advantagesBack from "../../img/advantages-back.svg"
import './Advantages.css'

const Advantages = () =>{
    return(
        <section id='advantages' className="advantages">            
            <div className='container'>
                <div className='advantages__inner'>  
                    <h2 className='title title_white'>Работа в удовольствие</h2>
                    <div className='advantages__items'>
                        <div className='advantages__item'>
                            <img src={schedule} alt="schedule" className="advantages__icon" />
                            <h3 className='advantages__item-title'>Удобный график</h3>
                            <p className='advantages__item-descr'>
                                Работа по несколько часов в неделю или каждый день - вы сами выбираете свой график
                            </p>             
                        </div>
                        <div className='advantages__item'>
                            <img src={money} alt="schedule" className="advantages__icon" />
                            <h3 className='advantages__item-title'>Деньги - сразу</h3>
                            <p className='advantages__item-descr'>
                                Выводите деньги с помощью удобного мобильного приложения
                            </p>             
                        </div>
                        <div className='advantages__item'>
                            <img src={programm} alt="schedule" className="advantages__icon" />
                            <h3 className='advantages__item-title'>Партнерская программа</h3>
                            <p className='advantages__item-descr'>
                                Скидка 20% на ремонт и сервисное обслуживание для водителей парка
                            </p>             
                        </div>
                    </div>
                    <img src={advantagesBack} alt="advantages-back" className="advantages__img" /> 
                </div> 
            </div>
        </section>
    )
}

export default Advantages;