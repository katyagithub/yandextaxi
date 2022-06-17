import React from 'react'
import './Start.css'

const Start = () =>{
    return(
        <section id='start' className="start">            
            <div className='container'>
                <h2 className='title'>Начало работы</h2>
                <div className="start__inner">
                    <div className="start__item">
                        <h3 className="start__item-title">
                            <span className='start-number'>1.</span>  <a href='#form'><span className='start-title'>Оставьте заявку</span> на сайте</a>
                        </h3>
                        <p className="start__item-descr">
                            мы свяжемся с вами для уточнения деталей
                        </p>
                    </div>
                    <div className="start__item">
                        <h3 className="start__item-title">
                            <span className='start-number'>2.</span> <a href='#application'><span className='start-title'>Скачайте</span> приложение</a>
                        </h3>
                        <p className="start__item-descr">
                            для удобного вывода средств
                        </p>
                    </div>
                    <div className="start__item">
                        <h3 className="start__item-title">
                            <span className='start-number'>3.</span> Выходите на линию
                        </h3>
                        <p className="start__item-descr">
                            чтобы получить первые заказы
                        </p>
                    </div>
                    <div className="start__item">
                        <h3 className="start__item-title">
                            <span className='start-number'>4.</span> Начните зарабатывать
                        </h3>
                        <p className="start__item-descr">
                            работайте тогда, когда вам удобно
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Start;