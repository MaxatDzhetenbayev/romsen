import styles from "./Sidebar.module.css";
import PizzaIcon from "./icons/pizza.svg";
import SetsIcon from "./icons/sets.svg";
import WOkIcon from "./icons/wok.svg";
import RollsIcon from "./icons/rolls.svg";
import SushiIcon from "./icons/sushi.svg";
import SalatIcon from "./icons/salat.svg";
import SoupIcon from "./icons/soup.svg";
import CornIcon from "./icons/corn.svg";
import DrinkIcon from "./icons/drink.svg";
import SalesIcon from "./icons/sales.svg";
import Logo from "/logo.png";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

export default function Sidebar() {
  return (
    <aside className={styles.wrapper}>
      <div className={styles.logo}>
        <img alt="logo" src={Logo} />
        <h2>ROMSEM</h2>
      </div>
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
    path: "#",
  },
  {
    name: "Сеты",
    icon: <img src={SetsIcon} alt="Sets icon" />,
    path: "#",
  },
  {
    name: "WOK",
    icon: <img src={WOkIcon} alt="Wok icon" />,
    path: "#",
  },
  {
    name: "Роллы",
    icon: <img src={RollsIcon} alt="Rolls icon" />,
    path: "#",
  },
  {
    name: "Суши",
    icon: <img src={SushiIcon} alt="sushi icon" />,
    path: "#",
  },
  {
    name: "Салаты",
    icon: <img src={SalatIcon} alt="salat icon" />,
    path: "#",
  },
  {
    name: "Супы",
    icon: <img src={SoupIcon} alt="soup icon" />,
    path: "#",
  },
  {
    name: "Корн доги",
    icon: <img src={CornIcon} alt="corn icon" />,
    path: "#",
  },
  {
    name: "Напитки",
    icon: <img src={DrinkIcon} alt="drink icon" />,

    path: "#",
  },
  {
    name: "Акции",
    icon: <img src={SalesIcon} alt="sales icon" />,

    path: "#",
  },
];
