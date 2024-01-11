import styles from "./Table.module.css";
import { AXIS_X, AXIS_Y } from "../../../data/data";
import { MouseAxis } from "./components/components";

export const Table = ({ className, value }) => {
  return (
    <div className={className}>
      <MouseAxis className={styles.axis} axis={AXIS_X} value={value.x} />
      <MouseAxis className={styles.axis} axis={AXIS_Y} value={value.y} />
    </div>
  );
};
