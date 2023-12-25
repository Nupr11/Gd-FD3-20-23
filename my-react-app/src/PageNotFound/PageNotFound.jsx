import { Layout } from "../components/Layout/Layout";
import styles from "../MainPage/Main/PageMain.module.css";
import style from "./PageNotFound.module.css";
import { Section } from "../Pages/About/components/Section";

export const PageNotFound = () => {
  return (
    <Layout className={`${styles.container} ${style.container}`}>
      <div className={`${styles.section} ${style.section}`}>
        <div className={style.textContainer}>
          <h2 className={style.title}>oops!</h2>
          <span className={style.text}>page not found</span>
        </div>
        <div className={style.imgContainer}>
          <img
            className={style.img}
            alt="page not found"
            src="/assets/img/4042.png"
          ></img>
        </div>
      </div>
    </Layout>
  );
};
