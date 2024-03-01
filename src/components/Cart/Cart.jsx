import { useContext } from "react";
import { CartItem } from "./CartItem/CartItem";
import { CartContext } from "../../context/cart.context";
import styles from "./Cart.module.css";
import { Button } from "../ui/Button/Button";
export const Cart = ({ className }) => {
  const { products, totalPrice } = useContext(CartContext);
  return (
    <aside className={(className, styles.wrapper)}>
      <h2 className={styles.title}>Корзина</h2>
      {products.map((product, idx) => (
        <CartItem key={idx} product={product} />
      ))}
      <div className={styles.bottom}>
        <span className={styles.totalPrice}>{totalPrice} COM</span>
        <Button size="small" color="orange">
          Оформить заказ
        </Button>
      </div>
    </aside>
  );
};
