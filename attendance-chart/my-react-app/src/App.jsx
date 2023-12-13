import { Table } from "./components/features/table";
import style from "./main.module.css";
// import { output } from "./data/dates";
// import { students } from "./data/students";

const App = () => {
  return (
    <div className="App">
      <Table className={style.table}></Table>
    </div>
  );
};

export default App;
