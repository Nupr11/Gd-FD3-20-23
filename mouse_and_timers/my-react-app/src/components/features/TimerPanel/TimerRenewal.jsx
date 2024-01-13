import { useTimer } from "../../../pages/timers/hooks/useTimer";
import { Timer } from "./components/Timer";
import { DEFAULTS } from "./../../../data/data";

export const TimerRenewal = ({ speed, className, reset }) => {
  const { timerValue } = useTimer(DEFAULTS.start, DEFAULTS.step, speed, reset);

  return <Timer className={className} time={timerValue} />;
};
