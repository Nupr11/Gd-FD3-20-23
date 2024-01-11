import { useEffect, useState } from "react";
import styles from "./Timers.module.css";
import { BUTTONS_DATA, TIMERS_DATA } from "../../data/data";
import { TimerPanel } from "../../components/features/TimerPanel";
import { ButtonPanel } from "../../components/lib/button";
import { Nav } from "../../components/lib/nav";

const DEFAULTS = { timers: TIMERS_DATA, buttons: BUTTONS_DATA, savedTime: 0 };
export const Timers = ({ className }) => {
  //state hooks
  const [timerData, setTimerData] = useState(DEFAULTS.timers);
  const [savedTime, setSavedTime] = useState(DEFAULTS.savedTime);

  // handlers
  const changeTimeHandler = () => {
    setTimerData((prevTimerData) =>
      prevTimerData.map((item) => ({
        ...item,
        start: item.start + item.step * item.speed,
      }))
    );
  };

  function changeSpeedHandler(button) {
    if (button)
      setTimerData((prevTimerData) =>
        prevTimerData.map((item) => ({
          ...item,
          speed: item.speed * button.speed,
        }))
      );
  }

  function resetTimeHandler(button = null) {
    setTimerData((prevTimerData) =>
      prevTimerData.map((item) => ({
        ...item,
        speed: button.speed,
        start: DEFAULTS.timers[0].start,
      }))
    );
  }

  // const saveTimeHandler = (time) => {
  //   setSavedTime(time);
  // };

  const buttonClickHandler = (id = null) => {
    const pressedButton = BUTTONS_DATA.find((button) => button.id === id);

    pressedButton && pressedButton.isRun
      ? changeSpeedHandler(pressedButton)
      : resetTimeHandler(pressedButton);
  };

  //effect hooks
  useEffect(() => {
    const savedTimer = timerData.find((item) => item.isSave === true);
    setTimerData({ ...savedTimer, start: savedTime });

    return () => {
      setSavedTime(savedTimer.start);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => changeTimeHandler(), 1000);
    return () => {
      clearInterval(interval);
      resetTimeHandler();
    };
  }, []);

  return (
    <div className={className}>
      <Nav className={styles.nav} />
      <section className={styles.panelWrapper}>
        <span className={styles.speed}>Timer speed: x {null}</span>
        <TimerPanel timerData={timerData} className={styles.timerPanel} />
        <ButtonPanel
          className={styles.buttonPanel}
          handler={buttonClickHandler}
          buttonData={DEFAULTS.buttons}
        />
      </section>
    </div>
  );
};
