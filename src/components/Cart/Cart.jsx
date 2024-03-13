import { useContext } from "react";
import { CartItem } from "./CartItem/CartItem";
import { CartContext } from "../../context/cart.context";
import styles from "./Cart.module.css";
import { Button } from "../ui/Button/Button";
import clsx from "clsx";
import { Aside } from "../Aside/Aside";
export const Cart = ({ className }) => {
  const { products, totalPrice, open, closeCart } = useContext(CartContext);
  return (
    <div className={clsx(styles.wrap, open && styles.opened)}>
      <button onClick={closeCart} className={styles.closeBtn}>
        <span>X</span>
      </button>
      {products.length === 0 ? (
        <Aside className={className} />
      ) : (
        <aside className={clsx(styles.wrapper)}>
          {products.map((product, idx) => (
            <CartItem key={idx} product={product} />
          ))}
          <div className={styles.bottom}>
            <span className={styles.totalPrice}>{totalPrice} TEНГЕ</span>
            <Button size="small" color="orange">
              Оформить заказ
            </Button>
          </div>
        </aside>
      )}
    </div>
  );
};
