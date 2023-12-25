import styles from "./Layout.module.css";
import { Header } from "../Header";
import { routes } from "../../App";
import { Footer } from "../Footer";
import { SITE_TITLE } from "../../MainPage/Main/data/data";

export const Layout = ({ className, children, userId }) => {
  return (
    <div className={className}>
      <Header
        userId={userId}
        className={styles.header}
        routes={routes}
        mainRoute="/"
        siteTitle={SITE_TITLE}
      />
      <main className={styles.main}>{children}</main>
      <Footer className={styles.footer} />
    </div>
  );
};
