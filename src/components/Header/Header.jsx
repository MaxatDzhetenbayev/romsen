import styles from './Hedaer.module.css'
export const Header = () => {
    return (
        <header className={styles.header}>
            <section className={styles.header__contact}>
                <h3>Наш телефон:</h3>
                <a href="tel:+996705188955">+996 705 188 955</a>
                <a href="tel:+996705188955">+996 705 188 955</a>
                <section className={styles.header__working_hous}>
                    <img src="svgs/time.svg" alt="" />
                    <p>работаем с 10:00 до 00:00</p>
                </section>
            </section>
            <section className={styles.header__right}>
                <section>
                    <p>Город:</p>
                    <h3>Казахстан</h3>
                </section>
                <section>
                    <section>
                        <a href="">Отзывы</a>
                        <a href="">Доставка и оплата</a>
                    </section>
                    <button>
                        <img src="svgs/find.svg" alt="" />
                    </button>
                </section>
            </section>
        </header>
    )
}
