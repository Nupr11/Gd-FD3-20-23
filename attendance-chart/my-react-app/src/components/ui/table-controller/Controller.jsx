import { ButtonSave } from "../../ui/table-controller/components/button-save";
import { AddButton } from "../../ui/table-controller/components/button-add";
import style from "./controller.module.css";

export const Controller = ({
  className,
  handleAddLesson,
  handleAddStudent,
}) => {
  return (
    <div className={className}>
      <ButtonSave
        className={`${style.button} ${style.buttonSave}`}
      ></ButtonSave>
      <AddButton
        className={style.button}
        text="Add student"
        onAdd={handleAddStudent}
      ></AddButton>
      <AddButton
        className={style.button}
        text="Add lesson"
        onAdd={handleAddLesson}
      ></AddButton>
    </div>
  );
};
