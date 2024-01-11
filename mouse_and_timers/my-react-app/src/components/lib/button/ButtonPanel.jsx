import { Button } from "./components/Button";
import styles from "./ButtonPanel.module.css";

export const ButtonPanel = ({ className, buttonData, handler }) => {
  const buttons = buttonData.map((item) => (
    <li key={item.title + item.id}>
      <Button
        id={item.id}
        title={item.title}
        className={styles.button}
        onClick={() => handler(item.id)}
      ></Button>
    </li>
  ));
  return <ul className={className}>{buttons}</ul>;
};
