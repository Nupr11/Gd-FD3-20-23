import { GET_TIMER } from "../../../../utils/timer";

export const Timer = ({ className, time }) => (
  <li className={className}>{time}</li>
);

//NOTE: неявное возвращение работает со стрелочной функцией при одном выражении (синт.cахар)
