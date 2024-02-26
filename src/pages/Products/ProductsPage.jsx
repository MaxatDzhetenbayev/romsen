import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../../components/ui/Card/Card";
import {
  CornIcon,
  DrinkIcon,
  PizzaIcon,
  RollsIcon,
  SalatIcon,
  SetsIcon,
  SoupIcon,
  SushiIcon,
  WOkIcon,
  StockIcon,
} from "../../components/Sidebar/icons";
import styles from "./ProductsPage.module.css";
import clsx from "clsx";
import { SortSelect } from "../../components/SortSelect/SortSelect";

const productsList = {
  pizza: new Array(9).fill({
    img: "/sets/salomon.jpg",
    name: "Саломон сет",
    desc: "1050 грамм, 30 кусочков",
    price: "1500 СОМ",
  }),
  wok: new Array(9).fill({
    img: "/sets/salomon.jpg",
    name: "Саломон сет",
    desc: "1050 грамм, 30 кусочков",
    price: "1500 СОМ",
  }),
  rolls: new Array(9).fill({
    img: "/sets/salomon.jpg",
    name: "Саломон сет",
    desc: "1050 грамм, 30 кусочков",
    price: "1500 СОМ",
  }),
  sushi: new Array(9).fill({
    img: "/sets/salomon.jpg",
    name: "Саломон сет",
    desc: "1050 грамм, 30 кусочков",
    price: "1500 СОМ",
  }),
  salats: new Array(9).fill({
    img: "/sets/salomon.jpg",
    name: "Саломон сет",
    desc: "1050 грамм, 30 кусочков",
    price: "1500 СОМ",
  }),
  soups: new Array(9).fill({
    img: "/sets/salomon.jpg",
    name: "Саломон сет",
    desc: "1050 грамм, 30 кусочков",
    price: "1500 СОМ",
  }),
  corndogs: new Array(9).fill({
    img: "/sets/salomon.jpg",
    name: "Саломон сет",
    desc: "1050 грамм, 30 кусочков",
    price: "1500 СОМ",
  }),
  drinks: new Array(9).fill({
    img: "/sets/salomon.jpg",
    name: "Саломон сет",
    desc: "1050 грамм, 30 кусочков",
    price: "1500 СОМ",
  }),
  stock: new Array(9).fill({
    img: "/sets/salomon.jpg",
    name: "Саломон сет",
    desc: "1050 грамм, 30 кусочков",
    price: "1500 СОМ",
  }),
  sets: [
    {
      img: "/sets/salomon.jpg",
      name: "Саломон сет",
      desc: "1050 грамм, 30 кусочков",
      price: "1500 СОМ",
    },
    {
      img: "/sets/phila.png",
      name: "Сет '5 Филадельфий'",
      desc: "1120 грамм 40 кусочек",
      price: "1499 СОМ",
    },
    {
      img: "/sets/phila2.png",
      name: "Филадельфия и лосось сет",
      desc: "1260 грамм 36 кусочек",
      price: "1499 СОМ",
    },
    {
      img: "/sets/phila3.png",
      name: "Сет '6 Филадельфий'",
      desc: "1320 грамм 46 кусочек",
      price: "1559 СОМ",
    },
    {
      img: "/sets/top.png",
      name: "Топовый сет",
      desc: "1020 грамм 40 кусочек",
      price: "1519 СОМ",
    },
    {
      img: "/sets/kamikadze.png",
      name: "Камикадзе сет",
      desc: "1200 грамм 52 кусочек",
      price: "1469 СОМ",
    },
    {
      img: "/sets/phila4.png",
      name: "Сет '4 Филадельфии'",
      desc: "1100 грамм 32 кусочек",
      price: "1559 СОМ",
    },
    {
      img: "/sets/philalove.png",
      name: "Филадельфия LOVE сет",
      desc: "1000 грамм 40 кусочек",
      price: "1479 СОМ",
    },
    {
      img: "/sets/yakudza.png",
      name: "Якудза сет",
      desc: "1270 грамм 50 кусочек",
      price: "1499 СОМ",
    },
  ],
};

const productsTypes = {
  sets: {
    name: "Сеты",
    icon: SetsIcon,
  },
  pizza: {
    name: "Пицца",
    icon: PizzaIcon,
  },
  wok: {
    name: "WOK",
    icon: WOkIcon,
  },
  rolls: {
    name: "Роллы",
    icon: RollsIcon,
  },
  sushi: {
    name: "Суши",
    icon: SushiIcon,
  },
  salats: {
    name: "Салаты",
    icon: SalatIcon,
  },
  soups: {
    name: "Супы",
    icon: SoupIcon,
  },
  corndogs: {
    name: "Корн доги",
    icon: CornIcon,
  },
  drinks: {
    name: "Напитки",
    icon: DrinkIcon,
  },
  stock: {
    name: "Акции",
    icon: StockIcon,
  },
};
export const ProductsPage = () => {
  const { type } = useParams();
  if (!type) return <></>;
  const [products, setProducts] = useState(productsList[type]);
  useEffect(() => {
    setProducts(productsList[type]);
  }, [type]);
  return (
    <section className={clsx("container__large", styles.wrapper)}>
      <section className={styles.header}>
        <div className={styles.type}>
          <img src={productsTypes[type].icon} alt={`${type} icon`} />
          <h1>{productsTypes[type].name}</h1>
        </div>
        <SortSelect sortProduct={() => {}} />
      </section>
      <section className={styles.list}>
        {products.map(({ img, name, desc, price }) => (
          <Card img={img} name={name} desc={desc} price={price} />
        ))}
      </section>
    </section>
  );
};
