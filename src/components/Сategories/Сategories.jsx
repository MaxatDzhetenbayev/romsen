import { Link } from 'react-router-dom'
import styles from './Categories.module.css'
import clsx from 'clsx'
const categoriesItemList = [
    {
        text: "Чикен",
        img: "categories/chiken.png",
        link: "categories/chiken"
    },
    {
        text: "C угрем",
        img: "categories/eel.png",
        link: "categories/eel"
    },
    {
        text: "Корндог",
        img: "categories/corndog.png",
        link: "categories/corndog"
    },
    {
        text: "Пицца",
        img: "categories/pizza.png",
        link: "categories/pizza"
    },
    {
        text: "Акции",
        img: "categories/stocks.png",
        link: "categories/stocks"
    },
]


export const Categories = () => {
    return (
        <section className='container__small' style={{ marginTop: 30 }}>
            <section className={styles.categories_list}>
                {
                    categoriesItemList.map(({ text, img, link }, idx) => (
                        <Link key={img} to={link} className={clsx(styles.categories_item, idx === categoriesItemList.length - 1 ? styles.last_item : "")}>
                            <article >
                                <img src={img} alt={text} />
                                <h1>{text}</h1>
                            </article>
                        </Link>
                    ))
                }
            </section>
        </section>
    )
}
