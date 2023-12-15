import { Table } from "./components/features/table";
import styles from "./main.module.css";

const App = () => {
  return (
    <div className="App">
      <Table className={styles.table}></Table>
    </div>
  );
};

export default App;
