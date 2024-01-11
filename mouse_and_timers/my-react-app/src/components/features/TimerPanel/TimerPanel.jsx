import { Timer } from "./components/Timer";
import styles from "./TimerPanel.module.css";

export const TimerPanel = ({ className, timerData }) => {
  const timersList = timerData.map((timer, index) => (
    <Timer
      className={styles.timer}
      id={timer.id}
      key={timer.id + index}
      time={timer.start}
    />
  ));
  return <ul className={className}>{timersList}</ul>;
};
