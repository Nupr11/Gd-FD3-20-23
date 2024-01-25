import styles from "./Section.module.css";
import { SectionPart } from "./components/SectionPart";

export const Section = ({ className, parts }) => {
  const SECTION_PART = parts.map((part) => (
    <SectionPart
      className={styles.SectionPart}
      title={part.title}
      content={part.content}
    ></SectionPart>
  ));
  return <section className={className}>{SECTION_PART}</section>;
};
