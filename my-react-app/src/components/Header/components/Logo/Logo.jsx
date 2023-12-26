import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

export const Logo = ({ className, site, userId }) => {
  return (
    <>
      <Link className={className} to={site.path}>
        <h1 className={styles.site}>{site.title}</h1>
      </Link>
      <h4>{userId}</h4>
    </>
  );
};
