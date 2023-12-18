import styles from "./clear-button.module.css";

export const ButtonClear = ({ className, text, handleClick }) => {
  return (
    <button
      key={`button-${className}`}
      className={className}
      type="button"
      onClick={handleClick}
    >
      <span className={styles.buttonText}>{text}</span>
    </button>
  );
};
