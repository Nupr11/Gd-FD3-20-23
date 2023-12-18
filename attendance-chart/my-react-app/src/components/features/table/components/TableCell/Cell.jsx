import styles from "./Cell.module.css";
import React from "react";

export const Cell = ({ className, info }) => {
  return (
    <div className={className}>
      <span className={styles.cellInfo}>{info}</span>
    </div>
  );
};
