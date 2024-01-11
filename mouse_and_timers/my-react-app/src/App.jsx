import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Mouse, Timers } from "./pages";
import styles from "./App.module.css";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/page/mouse"
            element={<Mouse className={styles.container} />}
          />
          <Route
            path="/page/timers"
            element={<Timers className={styles.container} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
