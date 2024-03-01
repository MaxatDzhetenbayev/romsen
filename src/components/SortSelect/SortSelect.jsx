import { useState } from "react";

const sortOptions = [
  { value: "base", label: "По умолчанию" },
  { value: "name", label: "Название" },
  { value: "price-low", label: "Сначала дешевле" },
  { value: "price-up", label: "Сначала дороже" },
  { value: "pieces", label: "Количество кусочков" },
  { value: "grams", label: "Вес" },
];
import styles from "./SortSelect.module.css";
import clsx from "clsx";

export const SortSelect = ({ sortProduct }) => {
  const [opened, setOpened] = useState(false);

  const [sortType, setSortType] = useState(sortOptions[0]);
  const changeSort = (sort) => {
    setSortType(sort);
    setOpened(false);
  };
  return (
    <div
      className={clsx(
        styles.wrapper,
        opened ? `${styles.shadow} ${styles.opened}` : styles.closed
      )}
    >
      <label htmlFor="select" className={styles.title}>
        Сортировка
      </label>
      <ul id="select" className={styles.select} value={sortType}>
        <div
          className={styles.selected}
          onClick={() => setOpened((prev) => !prev)}
        >
          <li>{sortType.label} </li>
          <img
            className={clsx(styles.arrow, opened ? styles.down : styles.up)}
            src="/arrow-down.svg"
          />
        </div>

        <div className={styles.expandable}>
          <hr className={styles.divider} />
          {sortOptions.map((sort) => (
            <li
              className={styles.option}
              onClick={() => {
                changeSort(sort);
                sortProduct(sort.value);
              }}
            >
              {sort.label}
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};
