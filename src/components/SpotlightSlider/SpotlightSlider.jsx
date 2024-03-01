import { Slider } from "../Slider/Slider";
import styles from './Spotlightslider.module.css'
const products = [
  { img: "productsSlider/productBanner.png", to: "#" },
  { img: "/logo.png", to: "#" },
];

export const SpotlightSlider = () => {
  return (
  <div className={styles.elems_to_hide}> 
  <Slider products={products} /> 
  </div>
  )
};
