import style from "./controller.module.css";
import React from "react";
import { ButtonSave } from "../../ui/table-controller/components/button-save";
import { ButtonAdd } from "../../ui/table-controller/components/button-add";
import { ButtonClear } from "./components/button-clear";

export const Controller = ({
  className,
  handleAddLesson,
  handleAddStudent,
  onSave,
  onClear,
}) => {
  return (
    <div className={className}>
      <ButtonSave
        className={`${style.button} ${style.buttonSave}`}
        classNameActive={style.clicked}
        save={onSave}
      ></ButtonSave>
      <ButtonClear
        className={`${style.button} ${style.buttonClear}`}
        text="Clear to default"
        handleClick={onClear}
      ></ButtonClear>
      <ButtonAdd
        className={`${style.button} ${style.buttonAdd}`}
        text="Add student"
        onAdd={handleAddStudent}
      ></ButtonAdd>
      <ButtonAdd
        className={`${style.button} ${style.buttonAdd}`}
        text="Add lesson"
        onAdd={handleAddLesson}
      ></ButtonAdd>
    </div>
  );
};
