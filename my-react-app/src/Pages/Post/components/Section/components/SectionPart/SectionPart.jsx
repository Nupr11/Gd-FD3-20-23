import styles from "./SectionPart.module.css";

export const SectionPart = ({ className, title, content }) => {
  return (
    <div className={className}>
      <h2 className={styles.contentTitle}>{title}</h2>
      <p className={styles.content}>{content}</p>
    </div>
  );
};
