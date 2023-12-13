import { useState } from "react";
import style from "./cell.module.css";

export const Cell = ({ className, cellInfo, clickAble }) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => setIsClicked(!isClicked);
  const isAttend = () => (isClicked ? (cellInfo = "attend") : cellInfo);

  const classNames = `${className} ${isClicked ? style.active : ""}`;
  return (
    <div
      key={className + cellInfo}
      className={classNames}
      onClick={clickAble ? handleClick : null}
    >
      <span className={style.cellInfo}>{isAttend()}</span>
    </div>
  );
};
