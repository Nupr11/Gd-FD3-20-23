import styles from "./Header.module.css";
import { Nav } from "./components/Navigation/Nav";
import { Logo } from "./components/Logo/Logo";

export const Header = ({ className, routes, mainRoute, siteTitle, userId }) => {
  return (
    <section className={className}>
      <Logo
        userId={userId}
        className={styles.logo}
        mainRoute={mainRoute}
        siteTitle={siteTitle}
      ></Logo>
      <Nav className={styles.nav} routes={routes}></Nav>
    </section>
  );
};
