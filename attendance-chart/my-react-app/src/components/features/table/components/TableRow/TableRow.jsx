import styles from "./TableRow.module.css";
// import { Cell } from "../../components/TableCell";

export const TableRow = ({
  className,
  dates,
  student,
  visitDates,
  onCellClick,
}) => {
  const isActive = (item) =>
    visitDates.includes(item) ? styles.cell_isActive : null;

  return (
    <div className={className}>
      <div className={styles.student}>{student}</div>
      {dates.map((date) => (
        <div
          key={student + date}
          className={`${styles.cell} ${isActive(date)}`}
          onClick={() => onCellClick(student, date)}
        >
          {isActive(date) ? "attend" : null}
        </div>
      ))}
    </div>
  );
};
