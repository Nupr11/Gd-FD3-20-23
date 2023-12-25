import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

export const Logo = ({ className, mainRoute, siteTitle, userId }) => {
  return (
    <>
      <Link className={className} to={mainRoute}>
        <h1 className={styles.siteName}>{siteTitle}</h1>
      </Link>
      <h4>{userId}</h4>
    </>
  );
};
