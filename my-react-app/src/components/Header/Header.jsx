import styles from "./Header.module.css";
import { Nav, Logo } from "../Header/components";

export const Header = ({ className, nav, userId }) => {
  return (
    <header className={className}>
      <Logo userId={userId} className={styles.logo}></Logo>
      <Nav className={styles.nav} nav={nav}></Nav>
    </header>
  );
};
