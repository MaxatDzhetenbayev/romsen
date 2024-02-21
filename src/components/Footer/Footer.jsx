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

                <div className={styles.content}>
                    <p className={styles.content_paragraph}>Введите номер</p>
                    <p>8 ___-___-__-__</p>
                    <p>Выберите удобный мессенджер для общения</p>
                </div>

                <div className={styles.content}>
                    <p>Тел: 87077777474</p>
                    <p>Тел: 87070007474</p>
                    <p>Адрес: Бакаева 126</p>
                </div>








            </div>
        </>
    )
}
