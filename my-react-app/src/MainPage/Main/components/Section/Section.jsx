import styles from "./Section.module.css";
import { SectionPart } from "./components/SectionPart";

export const Section = ({ className, parts }) => {
  const sectionPart = parts.map((part) => (
    <SectionPart
      className={styles.sectionPart}
      title={part.title}
      content={part.content}
    ></SectionPart>
  ));
  return <section className={className}>{sectionPart}</section>;
};
