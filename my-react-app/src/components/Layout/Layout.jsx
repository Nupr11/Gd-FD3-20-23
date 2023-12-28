import styles from "./Layout.module.css";
import { Header, Main, Footer } from "./../../components";
import { NAV_LINKS, SOCIAL_LINK } from "../../data/data.js";

export const Layout = ({ className, children, userId }) => {
  return (
    <div className={className}>
      <Header userId={userId} nav={NAV_LINKS} className={styles.header} />
      <Main className={styles.main}>{children}</Main>
      <Footer social={SOCIAL_LINK} className={styles.footer} />
    </div>
  );
};
