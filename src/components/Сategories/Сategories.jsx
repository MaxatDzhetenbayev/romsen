import React from 'react'
import './Categories.module.css'
import Chicken from "./pictures/chicken.png";
import Corndog from "./pictures/corndog.png";
import Eel from "./pictures/eel.png";
import Stocks from "./pictures/stocks.png";
import Pizza from "./pictures/pizza.png";

export const Categories = () => {
    return (
       <section className={styles.wrapper}>
        <div className={styles.chiken}>
            <h4>Чикен</h4>
            <image src= {Chicken}></image>
        </div>
        <div className={styles.eel}>
             <h4>C угрем</h4>
            <image src= {Eel}></image>
        </div>
        <div className={styles.corndog}>
            <h4>Корндог</h4>
            <image src= {Corndog}></image>
        </div>
        <div className={styles.pizza}>
            <h4>Пицца</h4>
            <image src= {Pizza}></image>
        </div>
        <div className={styles.stocks}>
            <h4>Акции</h4>
            <image src= {Stocks}></image>
        </div>
       </section>
    )
}
