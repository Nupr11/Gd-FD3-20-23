import styles from "./Nav.module.css";
import { NavItem } from "./components/NavItem";

export const Nav = ({ className, routes }) => {
  return (
    <nav>
      <ul className={className}>
        <NavItem className={styles.navLink} routes={routes} />
      </ul>
    </nav>
  );
};
