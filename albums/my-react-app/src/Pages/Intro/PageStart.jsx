import styles from "./PageStart.module.css";
import { Layout } from "../../components/Layout/Layout";
import { Section } from "./components/Section";
import { CONTENT_PARTS } from "./data/data";

export const PageStart = () => {
  return (
    <Layout className={styles.container}>
      <Section className={styles.section} parts={CONTENT_PARTS}></Section>
    </Layout>
  );
};
