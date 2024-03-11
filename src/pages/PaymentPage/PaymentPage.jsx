import { useState } from 'react'
import { Input } from '../../components/ui/Input/Input'
import styles from './PaymentPage.module.css'

export const PaymentPage = () => {
    const [isCardMethod, setIsCardMethod] = useState(false)

    return (
        <section className={styles.payment}>

            <section className={styles.payment_content}>
                <header className={styles.payment_header}>
                    <h3>Наш телефон:</h3>
                    <a href="tel:+996705188955">+996 705 188 955</a>
                    <a href="tel:+996705188955">+996 705 188 955</a>
                    <section className={styles.header__working_hous}>
                        <img src="svgs/time.svg" alt="" />
                        <p>работаем с 10:00 до 00:00</p>
                    </section>
                </header>
                <section className={styles.payment_wrapper}>
                    <h1>ВАШИ ДАННЫЕ</h1>
                    <section className={styles.payment_userInfo}>
                        <section className={styles.payment_order}>
                            <Input type="text" placeholder='Телефон' classNames={[styles.payment_order_phone]}/>
                            <Input type="text" placeholder='Имя' classNames={[styles.payment_order_name]}/>
                            <section className={styles.payment_order_payment_methods}>
                                <button onClick={() => setIsCardMethod(false)} className={!isCardMethod && styles.payment_order_payment_method_choice }>наличными</button>
                                <button onClick={() => setIsCardMethod(true)} className={isCardMethod && styles.payment_order_payment_method_choice }>Картой</button>
                            </section>
                            <section className={styles.payment_order_payment_surrender}>
                                <input type="checkbox" />
                                <p>Подготовить сдачу с</p>
                            </section>
                            <Input type="text" placeholder='Сумма' classNames={[styles.payment_order_payment_surrender_button]}/>
                            <Input type="text" placeholder='Комменатрий к заказу' classNames={[styles.payment_order_payment_comments]}/>
                            <ul className={styles.payment_order_payment_items_list}>
                                <li className={styles.payment_order_payment_items_item}>
                                    <p>Пицца с пепперони</p>
                                    <div>
                                        <button>-</button>
                                        <p>1</p>
                                        <button>+</button>
                                    </div>
                                </li>
                            </ul>
                            <Input type="text" placeholder='Введите промокод' classNames={[styles.payment_order_payment_promo]}/>
                        </section>
                        <section className={styles.payment_personal}></section>
                    </section>
                </section>
            </section>
            <section className={styles.payment_cart}>
                Корзина
            </section>

        </section>
    )
}
