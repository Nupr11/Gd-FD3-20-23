import style from "./row.module.css";
import { Cell } from "./components";

export const Row = ({ children, className, infoArray, empty, type }) => {
  return (
    <div className={className}>
      {children}
      {infoArray.map((info) => (
        <Cell
          className={type === "tHead" ? style.th : style.td}
          cellInfo={empty ? null : info}
          clickAble={type === "tHead" ? false : true}
        ></Cell>
      ))}
    </div>
  );
};
