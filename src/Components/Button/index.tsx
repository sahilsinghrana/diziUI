import { clsx } from "clsx";
import styles from "./index.module.css";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  type?: "primary" | "secondary";
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;

  /**
   * Optional Classnames
   */
  className?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  type = "primary",
  size = "medium",
  backgroundColor,
  label,
  className,
  ...props
}: ButtonProps) => {
  const classes = clsx(
    "dizi-button",
    clsx(styles[type]),
    clsx(styles[size]),
    className,
  );

  return (
    <button
      type="button"
      className={classes}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
