import { useContext } from "react";
import styles from "./CartItem.module.css";
import { Counter } from "../../Counter/Counter";
import { CartContext } from "../../../context/cart.context";
export const CartItem = ({ product }) => {
  const { increaseQuantity, decreaseQuantity } = useContext(CartContext);
  return (
    <article className={styles.wrapper}>
      <div className={styles.imgWrapper}>
        <img src={product.imagePath} alt={product.name} />
      </div>
      <div className={styles.right}>
        <h3 className={styles.name}>{product.name}</h3>
        <div className={styles.bottom}>
          <Counter
            decrease={() => {
              decreaseQuantity(product.id);
            }}
            increase={() => {
              increaseQuantity(product.id);
            }}
            quantity={product.quantity}
          />
          <span>{product.price} ТЕНГЕ</span>
        </div>
      </div>
    </article>
  );
};
