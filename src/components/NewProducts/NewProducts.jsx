import { Card } from '../ui/Card/Card'
import style from './NewProducts.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';

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
]



export const NewProducts = () => {
    return (
        <Swiper navigation={true} modules={[Navigation]} className={style.new_products} slidesPerView={2}
            spaceBetween={30} >
            {newProductList.map((item) => (
                <SwiperSlide
                className={style.product_item}
                    key={item.desc}>
                    <Card  {...item} />
                </SwiperSlide>
            ))}

        </Swiper>

    )
}