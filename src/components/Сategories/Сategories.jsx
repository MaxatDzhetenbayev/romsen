import styles from './Categories.module.css'
import Chicken from "./pictures/chiken.png";
import Corndog from "./pictures/corndog.png";
import Eel from "./pictures/eel.png";
import Stocks from "./pictures/stocks.png";
import Pizza from "./pictures/pizza.png";

export const Categories = () => {
    return (
       <section className={styles.wrapper}>
        <div className={styles.chicken}>
            <h4>Чикен</h4>
            <img src= {Chicken}></img>
        </div>
        <div className={styles.eel}>
             <h4>C угрем</h4>
            <img src= {Eel}></img>
        </div>
        <div className={styles.corndog}>
            <h4>Корндог</h4>
            <image src= {Corndog}></image>
        </div>
        <div className={styles.pizza}>
            <h4>Пицца</h4>
            <img src= {Pizza}></img>
        </div>
        <div className={styles.stocks}>
            <h4>Акции</h4>
            <img src= {Stocks}></img>
        </div>
       </section>
    )
}
