import clsx from "clsx";
import styles from "./Button.module.css";
import { Link } from "react-router-dom";

export const Button = ({
  isLink = false,
  children,
  className,
  color,
  ...props
}) => {
  if (isLink)
    return (
      <Link
        to={props.to}
        className={clsx(
          className,
          styles.button,
          { orange: styles.orange, black: styles.black }[color]
        )}
      >
        {children}
      </Link>
    );
  return (
    <button
      className={clsx(
        className,
        styles.button,
        { orange: styles.orange, black: styles.black }[color]
      )}
      {...props}
    >
      {children}
    </button>
  );
};
