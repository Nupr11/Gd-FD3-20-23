import style from "./table.module.css";
import { useState } from "react";
import { ACADEMY_STUDENTS } from "../../../data/students";
import { ACADEMY_LESSONS } from "../../../data/dates";
import { Row } from "./components/row";
import { Cell } from "./components/row/components";
import { Controller } from "../../ui/table-controller";

export const Table = ({ className }) => {
  const [students, setStudents] = useState(ACADEMY_STUDENTS);
  const [lessons, setLessons] = useState(ACADEMY_LESSONS);

  const handleAddStudent = () => {
    const newStudent = prompt("Enter student's name");
    setStudents([...students, newStudent]);
  };
  const handleAddLesson = () => {
    const newLesson = prompt("Enter date of lesson");
    setLessons([...lessons, newLesson]);
  };
  return (
    <>
      <div className={className} key={className}>
        <Row className={style.tHead} infoArray={lessons} type="tHead">
          <Cell
            className={`${style.thEmpty}`}
            empty={true}
            clickAble={false}
          ></Cell>
        </Row>

        {students.map((student) => (
          <Row
            className={style.tBody}
            infoArray={lessons}
            empty={true}
            type="tBody"
          >
            <Cell
              className={`${style.column}`}
              cellInfo={student}
              clickAble={false}
            ></Cell>
          </Row>
        ))}
      </div>
      <Controller
        className={style.controller}
        handleAddStudent={handleAddStudent}
        handleAddLesson={handleAddLesson}
      ></Controller>
    </>
  );
};
