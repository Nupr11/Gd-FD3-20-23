import { Timer } from "./components/Timer";
import styles from "./Timer.module.css";

export const TimerPaused = ({ time }) => {
  return <Timer className={styles.timer} time={time}></Timer>;
};
