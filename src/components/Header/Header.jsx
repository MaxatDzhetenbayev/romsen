import { Link } from "react-router-dom";

import styles from "./Hedaer.module.css";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
export const Header = () => {
  const { open, openCart, closeCart } = useContext(CartContext);
  return (
    <header className={styles.header}>
      <section className={styles.header__contact}>
        <h3>Наш телефон:</h3>
        <a href="tel:+996705188955">+996 705 188 955</a>
        <a href="tel:+996705188955">+996 705 188 955</a>
        <section className={styles.header__working_hous}>
          <img src="svgs/time.svg" alt="" />
          <p>работаем с 10:00 до 00:00</p>
        </section>
      </section>
      <section className={styles.header__right}>
        <section className={styles.header__city}>
          <p>Город:</p>
          <button
            onClick={() => {
              alert("city");
            }}
          >
            Казахстан
          </button>
        </section>
        <section className={styles.navigation}>
          <section className={styles.navigation__links}>
            <Link to="#">Отзывы</Link>
            <Link to="#">Доставка и оплата</Link>
          </section>
          <button>
            <img src="/svgs/find.svg" alt="" />
          </button>
          <button className={styles.cartBtn} onClick={open ? closeCart : openCart}>
            <img src="/svgs/cart-icon.svg" alt="" />
          </button>
        </section>
      </section>
    </header>
  );
};
