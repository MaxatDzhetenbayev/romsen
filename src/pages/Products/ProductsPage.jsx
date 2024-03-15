import { useContext, useEffect, useReducer } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
import { CartContext } from "../../context/cart.context";

// const productsList = {
// pizza: new Array(9).fill({
//   img: "/sets/salomon.jpg",
//   name: "Саломон сет",
//   grams: "1050",
//   pieces: "30",
//   price: "1500",
// }),
// wok: new Array(9).fill({
//   img: "/sets/salomon.jpg",
//   name: "Саломон сет",
//   grams: "1050",
//   pieces: "30",
//   price: "1500",
// }),
// rolls: new Array(9).fill({
//   img: "/sets/salomon.jpg",
//   name: "Саломон сет",
//   grams: "1050",
//   pieces: "30",
//   price: "1500",
// }),
// sushi: new Array(9).fill({
//   img: "/sets/salomon.jpg",
//   name: "Саломон сет",
//   grams: "1050",
//   pieces: "30",
//   price: "1500",
// }),
// salats: new Array(9).fill({
//   img: "/sets/salomon.jpg",
//   name: "Саломон сет",
//   grams: "1050",
//   pieces: "30",
//   price: "1500",
// }),
// soups: new Array(9).fill({
//   img: "/sets/salomon.jpg",
//   name: "Саломон сет",
//   grams: "1050",
//   pieces: "30",
//   price: "1500",
// }),
// corndogs: new Array(9).fill({
//   img: "/sets/salomon.jpg",
//   name: "Саломон сет",
//   grams: "1050",
//   pieces: "30",
//   price: "1500",
// }),
// drinks: new Array(9).fill({
//   img: "/sets/salomon.jpg",
//   name: "Саломон сет",
//   grams: "1050",
//   pieces: "30",
//   price: "1500",
// }),
// stock: new Array(9).fill({
//   img: "/sets/salomon.jpg",
//   name: "Саломон сет",
//   grams: "1050",
//   pieces: "30",
//   price: "1500",
// }),
// sets: [
//   {
//     img: "/sets/salomon.jpg",
//     name: "Саломон сет",
//     grams: "1050",
//     pieces: "30",
//     price: "1500",
//   },
//   {
//     img: "/sets/phila.png",
//     name: "Сет '5 Филадельфий'",
//     grams: "1120",
//     pieces: "40",
//     price: "1499",
//   },
//   {
//     img: "/sets/phila2.png",
//     name: "Филадельфия и лосось сет",
//     grams: "1260",
//     pieces: "36",
//     price: "1499",
//   },
//   {
//     img: "/sets/phila3.png",
//     name: "Сет '6 Филадельфий'",
//     grams: "1320",
//     pieces: "46",
//     price: "1559",
//   },
//   {
//     img: "/sets/top.png",
//     name: "Топовый сет",
//     grams: "1020",
//     pieces: "40",
//     price: "1519",
//   },
//   {
//     img: "/sets/kamikadze.png",
//     name: "Камикадзе сет",
//     grams: "1200",
//     pieces: "52",
//     price: "1469",
//   },
//   {
//     img: "/sets/phila4.png",
//     name: "Сет '4 Филадельфии'",
//     grams: "1100",
//     pieces: "32",
//     price: "1559",
//   },
//   {
//     img: "/sets/philalove.png",
//     name: "Филадельфия LOVE сет",
//     grams: "1000",
//     pieces: "40",
//     price: "1479",
//   },
//   {
//     img: "/sets/yakudza.png",
//     name: "Якудза сет",
//     grams: "1270",
//     pieces: "50",
//     price: "1499",
//   },
// ],
// };
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
  if (action.type == "fetch") return [...action.payload];
  if (action.type == "base") return [...state];
  const sorted = state.sort((a, b) => {
    if (!action.type.includes("price")) {
      return a[action.type] - b[action.type];
    }
    if (action.type.includes("low")) {
      return a[action.type.split("-")[0]] - b[action.type.split("-")[0]];
    } else {
      return b[action.type.split("-")[0]] - a[action.type.split("-")[0]];
    }
  });
  return [...sorted];
};
export const ProductsPage = () => {
  const { type } = useParams();
  const navigate = useNavigate()
  const [sortedProducts, dispatch] = useReducer(sortReducer, []);
  const { addToCart } = useContext(CartContext);
  const sortProduct = (type) => {
    dispatch({ type });
  };
  //https://65e830004bb72f0a9c4e817e.mockapi.io/api/v1/products?
  useEffect(() => {
    fetch(
      `https://65e830004bb72f0a9c4e817e.mockapi.io/api/v1/products?category=${type}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error, ", res.status);
        }
        return res.json();
      })
      .then((res) => {
        dispatch({ type: "fetch", payload: res });
        console.log(res);
      });
  }, [type]);
  if (!type) return <></>;
  return (
    <section className={clsx("container__large", styles.wrapper)}>
      <section className={styles.header}>
        <div className={styles.type}>
          <img src={productsTypes[type].icon} alt={`${type} icon`} />
          <h1>{productsTypes[type].name}</h1>
        </div>
        <div className={styles.sortWrapper}>
          <SortSelect sortProduct={sortProduct} />
        </div>
      </section>
      <section className={styles.list}>
        {
          sortedProducts.map((p) => (
            <button onClick={() => {
              navigate(`/products/${p.id}`)}
              } 
              key={p.id}>
              <Card
                key={p.id}
                add={(event) => {
                  event.stopPropagation()
                  addToCart(p);
                }}
                img={p.imagePath}
                name={p.name}
                desc={`${p.grams} грамм и  ${p.pieces} кусочков`}
                price={p.price + " TEНГЕ"}
              />
            </button>
          ))}
      </section>
    </section>
  );
};
