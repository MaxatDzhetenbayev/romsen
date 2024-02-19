import clsx from "clsx";
import { useState } from "react";
import styles from "./Slider.module.css";
import { Link } from "react-router-dom";
export const Slider = ({ products }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const openNextSlide = () => {};
  const openPrevSlide = () => {};
  const openSlide = (slideNumber) => {
    setCurrentSlide(slideNumber);
  };
  return (
    <div className={styles.wrapper}>
      <Link to={products[currentSlide].to}>
        <img
          src={products[currentSlide].img}
          alt="product "
          className={styles.productBanner}
        />
      </Link>
      <Dots
        length={products.length}
        openSlide={openSlide}
        currentSlide={currentSlide}
      />
    </div>
  );
};

const Dots = ({ length, currentSlide, openSlide }) => {
  return (
    <div className={styles.dotsWrapper}>
      {new Array(length).fill(".").map((_, idx) => (
        <span
          key={idx}
          className={clsx(styles.dot, currentSlide === idx && styles.activeDot)}
          onClick={() => openSlide(idx)}
        ></span>
      ))}
    </div>
  );
};
