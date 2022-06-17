import React from 'react'
// import arrow from "../../img/arrow.svg"
import './Car.css'

const Car = () =>{
    return(
        <section className="car">
            <div className='container'>
                <a href='#car' target="_blank" className='car__container'>
                    <div className='car__descr'>Нет автомобиля?</div>     
                    <div className='car__descr'>Работать на авто компании</div>        
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_25_1)">
                        <path d="M12.121 2.86222C11.8758 2.60843 11.4676 2.60843 11.2138 2.86222C10.9686 3.10744 10.9686 3.51557 11.2138 3.76022L15.8136 8.35997L0.635059 8.35997C0.281232 8.36054 0 8.64177 0 8.9956C0 9.34942 0.281232 9.6398 0.635059 9.6398L15.8136 9.6398L11.2138 14.231C10.9686 14.4848 10.9686 14.8935 11.2138 15.1381C11.4676 15.3919 11.8763 15.3919 12.121 15.1381L17.8097 9.44946C18.0635 9.20424 18.0635 8.79611 17.8097 8.55146L12.121 2.86222Z" fill="black"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_25_1">
                        <rect width="18" height="18" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                </a>
            </div>
        </section>

    )
}

export default Car;