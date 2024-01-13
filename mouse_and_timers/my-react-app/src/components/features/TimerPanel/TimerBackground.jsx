import { Timer } from "./components/Timer";
import styles from "./Timer.module.css";

export const TimerBackground = ({ permanentTimerValue }) => {
  return <Timer time={permanentTimerValue} className={styles.timer} />;
};
