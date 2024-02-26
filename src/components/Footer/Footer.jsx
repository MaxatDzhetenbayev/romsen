import React from 'react'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'





export const Footer = () => {
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.content}>
                    <Link to=""> О компании </Link>
                    <Link to=""> Политика возврата </Link>
                    <Link to=""> Лента материалов </Link>
                    <Link to=""> Доставка и оплата </Link>
                </div>

                <div className={styles.center}>
                    <p className={styles.content_paragraph}>Введите номер</p>
                    <p>8 ___-___-__-__</p>
                    <p> </p>
                    <p>Выберите удобный мессенджер для общения</p>
                    <section className={styles.socials}>
                    <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target='blank'><img src="footer/whatsapp.png"alt="" /></Link>
                    <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target='blank'><img src="footer/instagram.png"alt="" /></Link>
                    <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target='blank'><img src="footer/telegram.png"alt="" /></Link>

                    </section>
                </div>

                <div className={styles.right}>
                    <p>Тел: <a  href="tel:+7077777474">87077777474</a></p>
                    <p>Тел: <a href="tel:+7070007474">87070007474</a></p>
                    <p>Адрес: Бакаева 126</p>
                </div>








            </div>
        </>
    )
}
