import clsx from "clsx";
import styles from "./Button.module.css";
import { Link } from "react-router-dom";

export const Button = ({
  isLink = false,
  children,
  size = "base",
  className,
  color,
  onClick,
  ...props
}) => {
  if (isLink)
    return (
      <Link
        to={props.to}
        className={clsx(
          styles.button,
          { orange: styles.orange, black: styles.black }[color],
          { base: styles.baseSize, small: styles.smallSize }[size],
          className
        )}
      >
        {children}
      </Link>
    );
  return (
    <button
      className={clsx(
        styles.button,
        { orange: styles.orange, black: styles.black }[color],
        { base: styles.baseSize, small: styles.smallSize }[size],
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
