import styles from "./Counter.module.css";
import MinusIcon from "/svgs/minus.svg";
import PlusIcon from "/svgs/plus.svg";

export const Counter = ({ increase, decrease, quantity }) => {
  return (
    <div className={styles.counter}>
      <button className={styles.minus} onClick={decrease}>
        <img src={MinusIcon} />
      </button>
      <span>{quantity}</span>
      <button className={styles.plus} onClick={increase}>
        <img src={PlusIcon} />
      </button>
    </div>
  );
};
