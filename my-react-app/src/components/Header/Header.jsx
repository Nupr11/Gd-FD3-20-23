import styles from "./Header.module.css";
import { Nav } from "./components/Navigation/Nav";
import { Logo } from "./components/Logo/Logo";

export const Header = ({ className, site, nav, userId }) => {
  return (
    <section className={className}>
      <Logo userId={userId} className={styles.logo} site={site}></Logo>
      <Nav className={styles.nav} nav={nav}></Nav>
    </section>
  );
};
