import styles from "../../MainPage/Main/PageMain.module.css";
import { Layout } from "../../components/Layout/Layout";
import { Section } from "./components/Section";
import { CONTENT_PARTS } from "./data/data";
import { Outlet } from "react-router-dom";

export const PagePost = () => {
  return (
    <Layout userId={<Outlet />} className={styles.container}>
      <Section className={styles.section} parts={CONTENT_PARTS}></Section>
    </Layout>
  );
};
