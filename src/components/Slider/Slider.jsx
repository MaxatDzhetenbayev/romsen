import clsx from "clsx";
import { useEffect, useState } from "react";
import styles from "./Slider.module.css";
import { Link } from "react-router-dom";
export const Slider = ({ products }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  let downX = 0;
  const openSlide = (slideNumber) => {
    setCurrentSlide(slideNumber);
  };
  const nextSlide = () => {
    setCurrentSlide((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1,
    );
  };
  const prevSlide = () => {
    setCurrentSlide((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1,
    );
  };
  useEffect(() => {
    let timeout = setTimeout(() => {
      nextSlide();
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);
  function handleDrag(e) {
    //get drag direction
    if (downX - e.clientX < 0) {
      //left
      e.clientX === 0 && prevSlide();
    } else {
      //right
      e.clientX === 0 && nextSlide();
    }
  }
  function handleDown(e) {
    downX = e.clientX;
  }
  return (
    <div className={styles.wrapper}>
      {products.map(({ img, to }, idx) => (
        <Link
          to={to}
          key={idx}
          style={{
            display: idx === currentSlide ? "block" : "none",
          }}
        >
          <div className={styles.bannerWrapper}>
            <div
              className={styles.overlay}
              draggable
              onDrag={handleDrag}
              onMouseDown={handleDown}
            />
            <img src={img} alt="product " className={styles.productBanner} />
          </div>
        </Link>
      ))}
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
