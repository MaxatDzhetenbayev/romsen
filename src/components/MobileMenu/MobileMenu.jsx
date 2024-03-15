import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import styles from "./MobileMenu.module.css";
import { Link } from "react-router-dom";
export const MobileMenu = () => {
  const { openCart, open, closeCart } = useContext(CartContext);
  return (
    <div className={styles.wrapper}>
      <Link to={"/"}>
        <MenuButton name="Меню" icon="/svgs/menu-icon.svg" />
      </Link>
      <MenuButton
        onClick={open ? closeCart : openCart}
        name="Корзина"
        icon="/svgs/cart-icon.svg"
      />
      <Link to={"/reviews"}>
        <MenuButton name="Отзывы" icon="/svgs/review-icon.svg" />
      </Link>
    </div>
  );
};

const MenuButton = ({ name, icon, ...props }) => {
  return (
    <button className={styles.button} {...props}>
      <img src={icon} alt={name} />
      <span>{name}</span>
    </button>
  );
};
