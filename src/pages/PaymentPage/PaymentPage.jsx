import { useContext, useState } from "react";

import { Counter } from "../../components/Counter/Counter";
import { Cart } from "../../components/Cart/Cart";
import { Input } from "../../components/ui/Input/Input";
import { Button } from "../../components/ui/Button/Button";
import styles from "./PaymentPage.module.css";
import clsx from "clsx";
import { CartContext } from "../../context/cart.context";
import { CartItem } from "../../components/Cart/CartItem/CartItem";

export const PaymentPage = () => {
  const { totalPrice } = useContext(CartContext);
  const [isCardMethod, setIsCardMethod] = useState(false);
  const [delivery, setDelivery] = useState("courier");
  const [now, setNow] = useState("now");
  const [count, setCount] = useState(0);
  const increase = () => setCount(count + 1);
  const decrease = () =>
    setCount((prev) => {
      if (prev == 0) {
        return 0;
      }
      return prev - 1;
    });

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
          <section className={clsx(styles.split, styles.delivery)}>
            <button
              onClick={() => setDelivery("courier")}
              className={clsx(
                styles.splitButton,
                delivery == "courier" && styles.splitSelected,
              )}
            >
              Курьером
            </button>
            <button
              onClick={() => setDelivery("self")}
              className={clsx(
                styles.splitButton,
                delivery == "self" && styles.splitSelected,
              )}
            >
              Самовывоз
            </button>
          </section>
          <section className={clsx(styles.split, styles.paymentType)}>
            <button
              onClick={() => setIsCardMethod(true)}
              className={clsx(
                styles.splitButton,
                isCardMethod && styles.splitSelected,
              )}
            >
              Наличными
            </button>
            <button
              onClick={() => setIsCardMethod(false)}
              className={clsx(
                styles.splitButton,
                !isCardMethod && styles.splitSelected,
              )}
            >
              Картой
            </button>
          </section>
          <section className={styles.userLocation}>
            <Input placeholder="Улица" />
            <Input placeholder="Дом" />
          </section>
          <section className={styles.change}>
            <div className={styles.checkbox}>
              <input type="checkbox" />
              <span>Подготовить сдачу с</span>
            </div>
            <Input placeholder="Сумма" />
          </section>
          <section className={styles.userHome}>
            <Input placeholder="Кв" />
            <Input placeholder="Подъезд" />
            <Input placeholder="Этаж" />
            <Input placeholder="Код" />
          </section>
          <section className={styles.comment}>
            <Input placeholder="Комменатрий к заказу" />
          </section>
          <section className={clsx(styles.split, styles.time)}>
            <button
              onClick={() => setNow("now")}
              className={clsx(
                styles.splitButton,
                now == "now" && styles.splitSelected,
              )}
            >
              На сейчас
            </button>
            <button
              onClick={() => setNow("soon")}
              className={clsx(
                styles.splitButton,
                now == "soon" && styles.splitSelected,
              )}
            >
              На время
            </button>
          </section>
          <section className={styles.extra}>
            <span>Палочки + соусник обычные</span>
            <Counter quantity={count} increase={increase} decrease={decrease} />
          </section>
          <section className={styles.email}>
            <Input placeholder="E-mail(необязательно)" />
          </section>
          <section className={styles.promo}>
            <Input placeholder="Введите промокод" />
          </section>
          <section className={styles.total}>
            <section className={styles.between}>
              <span>Доставка</span>
              <span>Бесплатно</span>
            </section>
            <section className={styles.between}>
              <span>Итого</span>
              <span>{totalPrice} ТЕНГЕ</span>
            </section>
          </section>

          <Button color="orange" className={styles.submit}>
            Оформить заказ
          </Button>
          <span className={styles.permissions}>
            Нажимая на кнопку Оформить заказ, Вы подтверждаете свое согласие на
            обработку персональных данных в соответствии с Публичной оффертой
          </span>
        </section>
      </section>
      <CartContainer />
    </section>
  );
};

const CartContainer = () => {
  const { products, totalPrice } = useContext(CartContext);
  return (
    <section className={styles.cart}>
      <section className={styles.cartItems}>
        {products.map((product) => (
          <CartItem product={product} />
        ))}
      </section>
      <section className={styles.cartBottom}>
        <section className={styles.between}>
          <span>Доставка</span>
          <span>Бесплатно</span>
        </section>
        <section className={styles.between}>
          <span>Итого</span>
          <span>{totalPrice} ТЕНГЕ</span>
        </section>
      </section>
    </section>
  );
};
