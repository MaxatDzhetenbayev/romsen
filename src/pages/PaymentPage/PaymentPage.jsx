import styles from './PaymentPage.module.css'

export const PaymentPage = () => {


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
                    <form className={styles.payment_userForm}>
                        <section className={styles.payment_order}>
                            <input type="text" placeholder='Телефон' className={styles.payment_order_phone} />
                            <input type="text" placeholder='Имя' className={styles.payment_order_name} />
                            <section className={styles.payment_order_payment_methods}>
                                <button>наличными</button>
                                <button>Картой</button>
                            </section>
                            <section className={styles.payment_order_payment_surrender}>
                                <input type="checkbox" />
                                <p>Подготовить сдачу с</p>
                            </section>
                            <input type="text" placeholder='Сумма' className={styles.payment_order_payment_surrender_button} />
                            <input type="text" placeholder='Комменатрий к заказу' className={styles.payment_order_payment_comments} />
                            <ul>
                                <li>
                                    <p>Пицца с пепперони</p>
                                    <div>
                                        <button>-</button>
                                        <p>1</p>
                                        <button>+</button>
                                    </div>
                                </li>
                            </ul>
                            <input type="text" placeholder='Введите промокод' className={styles.payment_order_payment_promo} />
                        </section>
                        <section className={styles.payment_personal}></section>
                    </form>
                </section>
            </section>
            <section className={styles.payment_cart}>
                Корзина
            </section>

        </section>
    )
}
