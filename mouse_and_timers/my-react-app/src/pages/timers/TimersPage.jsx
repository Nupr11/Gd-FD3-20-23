import {
  TimerBackground,
  TimerPaused,
  TimerRenewal,
} from "../../components/features/TimerPanel";
import { ButtonPanel } from "../../components/lib/button";
import { useTimer } from "./hooks/useTimer";
import { useEffect } from "react";
import styles from "./TimersPage.module.css";
import { BUTTONS_DATA, DEFAULTS } from "../../data/data";

export const TimersPage = ({
  handler,
  permanentTimerValue,
  pauseValue,
  onSavePauseTimer,
  className,
  speed,
  reset,
}) => {
  const { timerValue } = useTimer(pauseValue, DEFAULTS.step, speed, reset);

  useEffect(() => {
    return () => onSavePauseTimer(timerValue);
  }, [onSavePauseTimer, timerValue]);

  return (
    <div className={className}>
      <section className={styles.panelWrapper}>
        <span className={styles.speed}>Timer speed: x {speed}</span>
        <ul className={styles.timerList}>
          <TimerBackground
            permanentTimerValue={permanentTimerValue}
            className={styles.timer}
          />
          <TimerRenewal className={styles.timer} speed={speed} reset={reset} />
          <TimerPaused className={styles.timer} time={timerValue} />
        </ul>
        <ButtonPanel
          className={styles.buttonPanel}
          handler={handler}
          buttonData={BUTTONS_DATA}
        />
      </section>
    </div>
  );
};
