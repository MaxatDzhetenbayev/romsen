// import { Card } from '../ui/Card/Card'
import style from './NewProducts.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/free-mode';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { FreeMode, Navigation } from 'swiper/modules';

const newProductList = [
    {
        name: "Саламон сет",
        desc: "1050 грамм, 30 кусочков",
        price: 6500,
        img: "newProducts/salomon.png"
    },
    {
        name: "Филадельфия и лосось сет",
        desc: "1260 грамм, 36 кусочков",
        price: 6900,
        img: "newProducts/philadelphia.png"

    },
    {
        name: "Самая большая Филадельфия",
        desc: "2050 грамм, 45 кусочков",
        price: 9000,
        img: "newProducts/bigPhiladelphia.png"
    },
    {
        name: "Филадельфия и лосось сет",
        desc: "1260 грамм, 36 кусочков",
        price: 6900,
        img: "newProducts/philadelphia.png"
    },
    {
        name: "Саламон сет",
        desc: "1050 грамм, 30 кусочков",
        price: 6500,
        img: "newProducts/salomon.png"
    },
]



export const NewProducts = () => {
    return (
        <section className='container__small'>
            <Swiper
                navigation={true}
                modules={[Navigation, FreeMode]}
                className={style.new_products}
                slidesPerView={3}
                spaceBetween={10}
                autoHeight={true}
            >
                {newProductList.map((item) => (
                    <SwiperSlide
                        key={item.desc}>
                        <article className={style.product_item}>
                            <img src={item.img} alt={item.name} />
                        <header>
                            <h1>{item.name}</h1>
                            <p>{item.desc}</p>
                        </header>
                        <footer>
                            <p>{item.price}</p>
                            <button>Хочу!</button>
                        </footer>
                        </article>
                    </SwiperSlide>
                ))}

            </Swiper>
        </section>
    )
}