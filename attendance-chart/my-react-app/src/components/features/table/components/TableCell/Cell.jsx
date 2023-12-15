import styles from "./Cell.module.css";

export const Cell = ({ className, info }) => {
  return (
    <div className={className}>
      <span className={styles.cellInfo}>{info}</span>
    </div>
  );
};
