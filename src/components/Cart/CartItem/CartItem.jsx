import styles from "./CartItem.module.css";
import MinusIcon from "/svgs/minus.svg";
import PlusIcon from "/svgs/plus.svg";
export const CartItem = ({ product }) => {
  return (
    <article className={styles.wrapper}>
      <div className={styles.imgWrapper}>
        <img src={product.img} alt={product.name} />
      </div>
      <div className={styles.right}>
        <h3 className={styles.name}>{product.name}</h3>
        <div className={styles.bottom}>
          <Counter quantity={product.quantity} />
          <span>{product.price} COM</span>
        </div>
      </div>
    </article>
  );
};

const Counter = ({ quantity }) => {
  return (
    <div className={styles.counter}>
      <button className={styles.minus}>
        <img src={MinusIcon} />
      </button>
      <span>{quantity}</span>
      <button className={styles.plus}>
        <img src={PlusIcon} />
      </button>
    </div>
  );
};
