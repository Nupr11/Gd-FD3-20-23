import { useLocation, useNavigate } from "react-router-dom";
import styles from "./ButtonBack.module.css";

export const ButtonBack = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const handler = () => {
    location.key !== "default" && navigate(-1);
  };
  return (
    <button className={styles.btnBack} onClick={handler}>
      Back
    </button>
  );
};
