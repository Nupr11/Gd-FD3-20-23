import styles from "./Nav.module.css";
import { NavItem } from "./components/NavItem";

export const Nav = ({ className, nav }) => {
  return (
    <nav>
      <ul className={className}>
        <NavItem className={styles.navLink} nav={nav} />
      </ul>
    </nav>
  );
};
