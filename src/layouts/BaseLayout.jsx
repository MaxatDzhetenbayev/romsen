import { Outlet } from "react-router-dom";
import { Aside } from "../components/Aside/Aside";
import Sidebar from "../components/Sidebar/Sidebar";
import { Header } from "../components/Header/Header";
import styles from "./BaseLayouts.module.css";
import { Footer } from "../components/Footer/Footer";
import { useContext } from "react";
import { CartContext } from "../context/cart.context";
import { Cart } from "../components/Cart/Cart";
import { MobileMenu } from "../components/MobileMenu/MobileMenu";

export const BaseLayout = () => {
  const { products, open } = useContext(CartContext);
  return (
    <div className={styles.base_layout}>
      <Sidebar className={styles.elems_to_hide} />
      <div className={styles.main}>
        <Header />
        <Outlet />
        <Footer />
      </div>
      <Cart />
      <MobileMenu />
    </div>
  );
};
