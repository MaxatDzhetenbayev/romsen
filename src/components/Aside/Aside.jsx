import React from 'react'
import './Aside.css'

export const Aside = () => {
  return (
    <div className='right-stuff'>
      <div className='car' >
        <div className='car-top'>
          <h4>Ваша корзина пуста</h4>
          <div className='small-text'>
          <p>Добавьте же скорее что нибудь!</p>
          </div>
        </div>
        <button className='car-bottom'>Доставка бесплатно от ??? сом</button>
      </div>

      <div className='google-map'>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6047.55538251043!2d80.25348975471076!3d50.40972982724863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42f2653a6f344c3d%3A0xc21961f0696b30fd!2z0KbQtdC90YLRgNCw0LvRjNC90YvQuSDQv9Cw0YDQug!5e0!3m2!1sru!2skz!4v1708077299007!5m2!1sru!2skz" 
        width="100%" 
        style={{border:0, aspectRatio: "2/1"}} 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"
        >

        </iframe>
        <div className='map-bottom'>
        <h4>Укажите адрес</h4>
        <div className='small-text'>
        <p>И узнайте время доставки</p>
        </div>
        </div>
      </div>

    </div>
  )
}
