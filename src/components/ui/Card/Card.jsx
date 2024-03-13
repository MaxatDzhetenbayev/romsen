import styles from "./Card.module.css";
import { Button } from "../Button/Button";
export const Card = ({ add, img, name, desc, price, to }) => {
  return (
    <section className={styles.wrapper}>
      <section className={styles.top}>
        <div className={styles.imgWrapper}>
          <img src={img} alt={name} />
        </div>
        <h2>{name}</h2>
        <p>{desc}</p>
      </section>
      <section className={styles.bottom}>
        <span>{price}</span>
        <Button onClick={add} to={to} color="orange">
          Хочу
        </Button>
      </section>
    </section>
  );
};
