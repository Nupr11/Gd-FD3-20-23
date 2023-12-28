import styles from "../Intro/PageIntro.module.css";
import { Layout } from "../../components/Layout/Layout";
import { Section } from "./components/Section";
import { CONTENT_PARTS } from "./data/data";
import { Outlet, useParams } from "react-router-dom";

export const PagePost = () => {
  const params = useParams(); //по лекции
  const pageId = params.id;

  return (
    <Layout userId={<Outlet />} className={styles.container}>
      <p>Another way to show id: {pageId}</p>
      <Section className={styles.section} parts={CONTENT_PARTS}></Section>
    </Layout>
  );
};
