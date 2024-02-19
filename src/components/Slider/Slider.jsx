import clsx from "clsx";
import { useState } from "react";
import styles from "./Slider.module.css";
import { Link } from "react-router-dom";
export const Slider = ({ products }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  let downX = 0;
  const openSlide = (slideNumber) => {
    setCurrentSlide(slideNumber);
  };
  function handleDrag(e) {
    if (downX - e.clientX > 400) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(1);
    }
  }
  function handleDown(e) {
    downX = e.clientX;
  }
  return (
    <div className={styles.wrapper}>
      <Link
        to={products[currentSlide].to}
        draggable
        onDrag={handleDrag}
        onMouseDown={handleDown}
      >
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
