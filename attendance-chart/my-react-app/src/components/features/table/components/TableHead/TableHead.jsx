import styles from "./TableHead.module.css";

export const TableHead = ({ className, dates }) => {
  return (
    <div className={className}>
      <div className={styles.student}></div>
      {dates.map((date) => (
        <div key={date} className={styles.cell}>
          {date}
        </div>
      ))}
    </div>
  );
};
