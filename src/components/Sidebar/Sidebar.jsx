import styles from "./Sidebar.module.css";
import {
  PizzaIcon,
  SalatIcon,
  SetsIcon,
  WOkIcon,
  RollsIcon,
  SushiIcon,
  SoupIcon,
  CornIcon,
  DrinkIcon,
  StockIcon,
} from "./icons";
import Logo from "/logo.png";
import { Link, NavLink } from "react-router-dom";
import clsx from "clsx";

export default function Sidebar({ className }) {
  return (
    <aside className={clsx(className, styles.wrapper)}>
      <Link to="/" className={styles.logo}>
        <img alt="logo" src={Logo} />
        <h2>ROMSEM</h2>
      </Link>
      <hr className={styles.divider} />
      <nav className={styles.nav}>
        {navlinks.map(({ path, name, icon }) => (
          <NavLink
            to={path}
            key={name}
            className={({ isActive }) =>
              clsx(styles.link, isActive && styles.activeLink)
            }
          >
            {icon}
            <span>{name}</span>{" "}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

const navlinks = [
  {
    name: "Пицца",
    icon: <img src={PizzaIcon} alt="Pizza icon" />,
    path: "/categories/pizza",
  },
  {
    name: "Сеты",
    icon: <img src={SetsIcon} alt="Sets icon" />,
    path: "/categories/sets",
  },
  {
    name: "WOK",
    icon: <img src={WOkIcon} alt="Wok icon" />,
    path: "/categories/wok",
  },
  {
    name: "Роллы",
    icon: <img src={RollsIcon} alt="Rolls icon" />,
    path: "/categories/rolls",
  },
  {
    name: "Суши",
    icon: <img src={SushiIcon} alt="sushi icon" />,
    path: "/categories/sushi",
  },
  {
    name: "Салаты",
    icon: <img src={SalatIcon} alt="salat icon" />,
    path: "/categories/salats",
  },
  {
    name: "Супы",
    icon: <img src={SoupIcon} alt="soup icon" />,
    path: "/categories/soups",
  },
  {
    name: "Корн доги",
    icon: <img src={CornIcon} alt="corn icon" />,
    path: "/categories/corndogs",
  },
  {
    name: "Напитки",
    icon: <img src={DrinkIcon} alt="drink icon" />,

    path: "/categories/drinks",
  },
  {
    name: "Акции",
    icon: <img src={StockIcon} alt="sales icon" />,

    path: "/categories/stock",
  },
];
