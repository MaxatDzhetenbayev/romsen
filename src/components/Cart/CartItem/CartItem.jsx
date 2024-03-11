import { useContext } from "react";
import styles from "./CartItem.module.css";
import MinusIcon from "/svgs/minus.svg";
import PlusIcon from "/svgs/plus.svg";
import { CartContext } from "../../../context/cart.context";
export const CartItem = ({ product }) => {
  return (
    <article className={styles.wrapper}>
      <div className={styles.imgWrapper}>
        <img src={product.imagePath} alt={product.name} />
      </div>
      <div className={styles.right}>
        <h3 className={styles.name}>{product.name}</h3>
        <div className={styles.bottom}>
          <Counter id={product.id} quantity={product.quantity} />
          <span>{product.price} ТЕНГЕ</span>
        </div>
      </div>
    </article>
  );
};

const Counter = ({ id, quantity }) => {
  const { increaseQuantity, decreaseQuantity } = useContext(CartContext);
  return (
    <div className={styles.counter}>
      <button className={styles.minus} onClick={() => decreaseQuantity(id)}>
        <img src={MinusIcon} />
      </button>
      <span>{quantity}</span>
      <button className={styles.plus} onClick={() => increaseQuantity(id)}>
        <img src={PlusIcon} />
      </button>
    </div>
  );
};
