import { useEffect, useState } from "react";
import { DEFAULTS } from "../../../data/data";

export const useTimer = (initialValue, step, speed, isReset) => {
  const [timerValue, setTimerValue] = useState(initialValue);

  useEffect(() => {
    const timerId = setInterval(
      () => setTimerValue((currentValue) => currentValue + step * speed),
      DEFAULTS.interval
    );

    return () => clearInterval(timerId);
  }, [speed]);
  return isReset ? DEFAULTS.start : { timerValue };
};
