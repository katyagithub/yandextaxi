import React from 'react'
import formBack from "../../img/form-back.svg"
import './Connection.css'


const Connection = () =>{
   
    return(
        <section id='form' className="connection">
            <div className='container'>
                <div className='connection__container'>
                    <h2 className='title'>Оставить заявку</h2>  
                    <form className="connection__form">      
                        <div className='connection__input-container'>
                            <label className='connection__label' htmlFor="formName">ФИО</label>
                            <input id='formName' className='connection__input' type="text" name="name" required/>
                        </div>
                        <div className='connection__input-container'>
                            <label className='connection__label' htmlFor="formTel">Телефон</label>
                            <input id='formTel'className='connection__input' type="phone" name="tel" required/>
                        </div>
                        <div className="connection__submit-container">
                            <button className='connection__submit' type='submit'>Отправить</button> 
                            <div className='connection__policy'>
                                Нажимая кнопку, вы соглашаетесь с 
                                <a href='#policy' target="_blank"> политикой конфиденциальности</a>
                            </div> 
                        </div>                            
                    </form>                                  
                </div>
                <img src={formBack} alt="form-back" className="connection__img" />
            </div>
        </section>
    )
}

export default Connection;