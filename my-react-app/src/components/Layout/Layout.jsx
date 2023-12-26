import styles from "./Layout.module.css";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { SITE_NAME, NAV_LINKS } from "../../data/data.js";

export const Layout = ({ className, children, userId }) => {
  return (
    <div className={className}>
      <Header
        userId={userId}
        site={SITE_NAME}
        nav={NAV_LINKS}
        className={styles.header}
      />
      <main className={styles.main}>{children}</main>
      <Footer className={styles.footer} />
    </div>
  );
};
