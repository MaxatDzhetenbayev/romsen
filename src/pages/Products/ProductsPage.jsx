import { useEffect, useReducer, useState } from "react";
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
    grams: "1050",
    pieces: "30",
    price: "1500",
  }),
  wok: new Array(9).fill({
    img: "/sets/salomon.jpg",
    name: "Саломон сет",
    grams: "1050",
    pieces: "30",
    price: "1500",
  }),
  rolls: new Array(9).fill({
    img: "/sets/salomon.jpg",
    name: "Саломон сет",
    grams: "1050",
    pieces: "30",
    price: "1500",
  }),
  sushi: new Array(9).fill({
    img: "/sets/salomon.jpg",
    name: "Саломон сет",
    grams: "1050",
    pieces: "30",
    price: "1500",
  }),
  salats: new Array(9).fill({
    img: "/sets/salomon.jpg",
    name: "Саломон сет",
    grams: "1050",
    pieces: "30",
    price: "1500",
  }),
  soups: new Array(9).fill({
    img: "/sets/salomon.jpg",
    name: "Саломон сет",
    grams: "1050",
    pieces: "30",
    price: "1500",
  }),
  corndogs: new Array(9).fill({
    img: "/sets/salomon.jpg",
    name: "Саломон сет",
    grams: "1050",
    pieces: "30",
    price: "1500",
  }),
  drinks: new Array(9).fill({
    img: "/sets/salomon.jpg",
    name: "Саломон сет",
    grams: "1050",
    pieces: "30",
    price: "1500",
  }),
  stock: new Array(9).fill({
    img: "/sets/salomon.jpg",
    name: "Саломон сет",
    grams: "1050",
    pieces: "30",
    price: "1500",
  }),
  sets: [
    {
      img: "/sets/salomon.jpg",
      name: "Саломон сет",
      grams: "1050",
      pieces: "30",
      price: "1500",
    },
    {
      img: "/sets/phila.png",
      name: "Сет '5 Филадельфий'",
      grams: "1120",
      pieces: "40",
      price: "1499",
    },
    {
      img: "/sets/phila2.png",
      name: "Филадельфия и лосось сет",
      grams: "1260",
      pieces: "36",
      price: "1499",
    },
    {
      img: "/sets/phila3.png",
      name: "Сет '6 Филадельфий'",
      grams: "1320",
      pieces: "46",
      price: "1559",
    },
    {
      img: "/sets/top.png",
      name: "Топовый сет",
      grams: "1020",
      pieces: "40",
      price: "1519",
    },
    {
      img: "/sets/kamikadze.png",
      name: "Камикадзе сет",
      grams: "1200",
      pieces: "52",
      price: "1469",
    },
    {
      img: "/sets/phila4.png",
      name: "Сет '4 Филадельфии'",
      grams: "1100",
      pieces: "32",
      price: "1559",
    },
    {
      img: "/sets/philalove.png",
      name: "Филадельфия LOVE сет",
      grams: "1000",
      pieces: "40",
      price: "1479",
    },
    {
      img: "/sets/yakudza.png",
      name: "Якудза сет",
      grams: "1270",
      pieces: "50",
      price: "1499",
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
const sortReducer = (state, action) => {
  if (action.type == "base") return state;
  const sorted = state.sort((a, b) => {
    if (!action.type.includes("price")) {
      return a[action.value] - b[action.value];
    }
    if (action.type.includes("low")) {
      return a[action.type.split("-")[0]] - b[action.type.split("-")[0]];
    } else {
      return b[action.type.split("-")[0]] - a[action.type.split("-")[0]];
    }
  });
  return sorted;
};
export const ProductsPage = () => {
  const { type } = useParams();
  const [sortedProducts, dispatch] = useReducer(
    sortReducer,
    productsList["sets"]
  );

  const sortProduct = (type) => {
    dispatch({ type });
  };
  console.log(sortedProducts);
  if (!type) return <></>;
  return (
    <section className={clsx("container__large", styles.wrapper)}>
      <section className={styles.header}>
        <div className={styles.type}>
          <img src={productsTypes[type].icon} alt={`${type} icon`} />
          <h1>{productsTypes[type].name}</h1>
        </div>
        <SortSelect sortProduct={sortProduct} />
      </section>
      <section className={styles.list}>
        {sortedProducts.map(({ img, name, grams, pieces, price }) => (
          <Card
            img={img}
            name={name}
            desc={`${grams} грамм и  ${pieces} кусочков`}
            price={price + " COM"}
          />
        ))}
      </section>
    </section>
  );
};
