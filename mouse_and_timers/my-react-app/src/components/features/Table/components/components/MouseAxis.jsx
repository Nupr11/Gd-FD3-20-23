import styles from "./MouseAxis.module.css";
import { MouseValue } from "./components";

export const MouseAxis = ({ className, axis, value }) => {
  return (
    <div className={className}>
      <span className={styles.axis}>{axis}</span>
      <MouseValue className={styles.value} value={value}></MouseValue>
    </div>
  );
};
