import { Link } from "react-router-dom";
import styles from "./Logo.module.css";
import { appInfo } from "../../../../App";
import { useContext } from "react";

export const Logo = ({ className, userId }) => {
  const context = useContext(appInfo);
  return (
    <>
      <Link className={className} to={context.path}>
        <h1 className={styles.site}>{context.title}</h1>
      </Link>
      {userId}
    </>
  );
};
