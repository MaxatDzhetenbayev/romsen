import { useState } from "react";
import { Input } from "../../components/ui/Input/Input";
import { Button } from "../../components/ui/Button/Button";
import styles from "./PaymentPage.module.css";

export const PaymentPage = () => {
  const [isCardMethod, setIsCardMethod] = useState(false);
  const [delivery, setDelivery] = useState("courier");

  return (
    <section className={styles.container}>
      <section className={styles.wrapper}>
        <header className={styles.header}>
          <h3>Наш телефон:</h3>
          <a href="tel:+996705188955">+996 705 188 955</a>
          <a href="tel:+996705188955">+996 705 188 955</a>
          <section className={styles.workingHours}>
            <img src="svgs/time.svg" alt="" />
            <p>работаем с 10:00 до 00:00</p>
          </section>
        </header>
        <section className={styles.paymentWrapper}>
          <h1 className={styles.title}>Ваши данные</h1>
          <section className={styles.userContact}>
            <Input placeholder="Телефон" />
            <Input placeholder="Имя" />
          </section>
          <section className={styles.split}>
            <button
              onClick={() => setDelivery("courier")}
              className={delivery == "courier" && styles.splitSelected}
            >
              Курьером
            </button>
            <button
              onClick={() => setDelivery("self")}
              className={delivery == "self" && styles.splitSelected}
            >
              Самовывоз
            </button>
          </section>
          <section className={styles.split}>
            <button
              onClick={() => setIsCardMethod(true)}
              className={isCardMethod && styles.splitSelected}
            >
              Наличными
            </button>
            <button
              onClick={() => setIsCardMethod(false)}
              className={!isCardMethod && styles.splitSelected}
            >
              Картой
            </button>
          </section>
          <section className={styles.userLocation}>
            <Input placeholder="Улица" />
            <Input placeholder="Дом" />
          </section>
        </section>
      </section>
      <section className={styles.cart}>Корзина</section>
    </section>
  );
};
