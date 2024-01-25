import styles from "./NavItem.module.css";
import { NavLink } from "react-router-dom";

export const NavItem = ({ className, nav }) => {
  const navList = nav.map((item) => (
    <li key={nav.title}>
      <NavLink className={className} to={item.path}>
        <span className={styles.navLinkText}>{item.title}</span>
      </NavLink>
    </li>
  ));

  return <>{navList}</>;
};
