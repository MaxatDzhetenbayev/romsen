import { Outlet } from "react-router-dom";
import { Aside } from "../components/Aside/Aside";
import Sidebar from "../components/Sidebar/Sidebar";
import { Header } from "../components/Header/Header";
import styles from "./BaseLayouts.module.css";
import { Footer } from "../components/Footer/Footer";
import { TextAbout } from "../components/TextAbout/TextAbout";

export const BaseLayout = () => {
  return (
    <div className={styles.base_layout}>
      <Sidebar className={styles.elems_to_hide} />

      <p className={styles.main}>
        <Header />
        <Outlet />
        <TextAbout />
        <Footer />
      </p>
        <Aside  className={styles.elems_to_hide}/>
    </div>
  );
};
