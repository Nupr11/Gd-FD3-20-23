import { Table } from "./components/features/Table";
import styles from "./App.module.css";
import React from "react";

const App = () => {
  return (
    <div className={styles.App}>
      <Table className={styles.table}></Table>
    </div>
  );
};

export default App;
