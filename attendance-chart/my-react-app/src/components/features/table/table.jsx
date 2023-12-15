import styles from "./Table.module.css";
import { saveData, loadData } from "./utils.js";
import { useState, useEffect } from "react";
import { ACADEMY_STUDENTS } from "../../../data/students";
import { ACADEMY_LESSONS } from "../../../data/dates";
import { Controller } from "../../ui/table-controller";
import { TableHead, TableRow } from "./components";

const DEFAULTS = {
  attendance: { dates: ACADEMY_LESSONS, students: { ...ACADEMY_STUDENTS } },
};

export const Table = ({ className }) => {
  const [attendance, setAttendance] = useState(DEFAULTS.attendance);

  const handleStudentAdd = () => {
    const newStudent = prompt("Enter new student's name");

    setAttendance({
      ...attendance,
      students: { ...attendance.students, [newStudent]: [] },
    });
  };

  const handleLessonAdd = () => {
    const newDate = prompt("Enter new lessons's date");
    setAttendance({ ...attendance, dates: [...attendance.dates, newDate] });
  };

  const handleCellClick = (student, date) => {
    const currentStudentDates = attendance.students[student];

    const newDates = currentStudentDates.includes(date)
      ? currentStudentDates.filter((dateItem) => dateItem !== date)
      : [...currentStudentDates, date];

    const newAttendance = {
      ...attendance,
      students: { ...attendance.students, [student]: newDates },
    };

    setAttendance(newAttendance);
  };

  const handleClear = () => {
    setAttendance(DEFAULTS.attendance);
  };

  const handleSave = () => {
    saveData("attendance", attendance);
  };

  // NOTE: load data in first render
  useEffect(() => {
    try {
      const attendance = loadData("attendance");

      DEFAULTS.attendance && setAttendance(attendance);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      <div className={className}>
        <TableHead className={styles.TableHead} dates={attendance.dates} />
        {Object.entries(attendance.students).map(([student, visitDates]) => (
          <TableRow
            className={styles.TableRow}
            dates={attendance.dates}
            student={student}
            visitDates={visitDates}
            onCellClick={handleCellClick}
          />
        ))}
      </div>
      <Controller
        className={styles.controller}
        handleAddStudent={handleStudentAdd}
        handleAddLesson={handleLessonAdd}
        onSave={handleSave}
        onClear={handleClear}
      ></Controller>
    </>
  );
};
