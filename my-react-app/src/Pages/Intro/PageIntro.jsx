import styles from "./PageIntro.module.css";
import { Layout } from "../../components/Layout/Layout";
import { Section } from "./components/Section";
import { CONTENT_PARTS } from "./data/data";

export const PageIntro = () => {
  return (
    <Layout className={styles.container}>
      <Section className={styles.section} parts={CONTENT_PARTS}></Section>
    </Layout>
  );
};
