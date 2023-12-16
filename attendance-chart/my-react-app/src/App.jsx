import { Table } from "./components/features/table";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.App}>
      <Table className={styles.table}></Table>
    </div>
  );
};

export default App;
