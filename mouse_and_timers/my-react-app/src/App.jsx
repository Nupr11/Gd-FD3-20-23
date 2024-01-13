import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MousePage, TimersPage } from "./pages";
import { useState } from "react";
import { useTimer } from "./pages/timers/hooks/useTimer";
import { Nav } from "./components/lib/nav";
import styles from "./App.module.css";
import { BUTTONS_DATA, DEFAULTS } from "./data/data";

export function App() {
  const [speed, setSpeed] = useState(DEFAULTS.speed);
  const [isReset, setReset] = useState(false);
  const [pauseValue, setPauseValue] = useState(DEFAULTS.pause);

  const { timerValue: permanentTimerValue } = useTimer(
    DEFAULTS.start,
    DEFAULTS.step,
    speed,
    isReset
  );

  const handleSavePauseValue = (value) => setPauseValue(value);

  const buttonClickHandler = (id = null) => {
    const pressedButton = BUTTONS_DATA.find((button) => button.id === id);

    pressedButton && pressedButton.isRun
      ? changeSpeedHandler(pressedButton)
      : resetTimeHandler(pressedButton);
  };

  function changeSpeedHandler(button) {
    setSpeed((prevStep) => (prevStep ? prevStep * button.speed : button.speed));
  }

  function resetTimeHandler(button) {
    setSpeed(button.speed);
    setReset(true);
  }

  return (
    <>
      <BrowserRouter>
        <Nav className={styles.nav} />
        <Routes>
          <Route
            path="/page/mouse"
            element={<MousePage className={styles.container} />}
          />
          <Route
            path="/page/timers"
            element={
              <TimersPage
                className={styles.container}
                permanentTimerValue={permanentTimerValue}
                pauseValue={pauseValue}
                onSavePauseTimer={handleSavePauseValue}
                handler={buttonClickHandler}
                speed={speed}
                reset={isReset}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
