import { Layout } from "../../components/Layout/Layout";
import IMG_404 from "../../../src/assets/img/404edited.png";
import styles from "../Intro/PageIntro.module.css";
import style from "./PageNotFound.module.css";

export const PageNotFound = () => {
  return (
    <Layout className={`${styles.container} ${style.container}`}>
      <div className={`${styles.section} ${style.section}`}>
        <div className={style.textContainer}>
          <h2 className={style.title}>oops!</h2>
          <span className={style.text}>page not found</span>
        </div>
        <div className={style.imgContainer}>
          <img className={style.img} alt="page not found" src={IMG_404}></img>
        </div>
      </div>
    </Layout>
  );
};
