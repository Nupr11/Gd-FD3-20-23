import styles from "./NavItem.module.css";
import { NavLink } from "react-router-dom";

export const NavItem = ({ className, routes }) => {
  const pages = routes.map((page) => (
    <li key={page.title}>
      <NavLink className={className} to={page.path}>
        <span className={styles.navLinkText}>{page.title}</span>
      </NavLink>
    </li>
  ));

  return <>{pages}</>;
};
