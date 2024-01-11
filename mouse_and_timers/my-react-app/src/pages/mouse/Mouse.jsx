import styles from "./Mouse.module.css";
import { useState, useEffect } from "react";
import { Nav } from "../../components/lib/nav";
import { Table } from "../../components/features/Table/Table";

export const Mouse = ({ className }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const mouseMoveHandler = (e) => setPosition({ x: e.clientX, y: e.clientY });

  useEffect(() => {
    window.addEventListener("mousemove", mouseMoveHandler);
    console.log("component did mount");
    return () => window.removeEventListener("mousemove", mouseMoveHandler);
  }, []);

  return (
    <div className={className}>
      <Nav className={styles.nav}></Nav>
      <section>
        <Table className={styles.table} value={position} />
      </section>
    </div>
  );
};
