import React from 'react'
import addDownload from "../../img/app-download.svg"
import appBackMap from "../../img/app-back-map.svg"
import appBackPhone from "../../img/app-back-phone.png"
import appBackPhone1 from "../../img/app-back-phone1.png"
import './Application.css'

const Application = () =>{
    return(
        <section id='application' className="application">
            <div className='container'>
                <div className="application__inner">
                    <h2 className='title'>Мобильное приложение</h2>
                    <p className='application__descr'>Мы разработали мобильное приложение для&nbsp;того, чтобы вам было удобно!</p>
                    <a href='#btn' target="_blank" className="application__download">
                        <img src={addDownload} alt="app-download" />
                    </a>
                </div>
                <div className="application__imgs">
                    <img src={appBackMap} alt="app-back-map" className="application__img map" />
                    <div className="application__phones">
                        <img src={appBackPhone} alt="app-back-phone" className="application__img phone1" />
                        <img src={appBackPhone1} alt="app-back-phone1" className="application__img phone2" />
                    </div>
                </div>        
            </div>
        </section>
    )
}

export default Application