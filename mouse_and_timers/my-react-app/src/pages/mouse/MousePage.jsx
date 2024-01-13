import styles from "./Mouse.module.css";
import { useState, useEffect } from "react";
import { Table } from "../../components/features/Table/Table";

export const MousePage = ({ className }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const mouseMoveHandler = (e) => setPosition({ x: e.clientX, y: e.clientY });

  useEffect(() => {
    window.addEventListener("mousemove", mouseMoveHandler);
    return () => window.removeEventListener("mousemove", mouseMoveHandler);
  }, []);

  return (
    <div className={className}>
      <section>
        <Table className={styles.table} value={position} />
      </section>
    </div>
  );
};
