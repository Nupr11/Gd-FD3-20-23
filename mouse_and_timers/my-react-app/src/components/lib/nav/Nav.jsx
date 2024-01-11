import { pages } from "../../../data/data";
import { NavLink } from "react-router-dom";

export const Nav = ({ className }) => {
  const page = pages.map((item) => (
    <li key={item.title + item.id}>
      <NavLink to={item.path}>{item.title}</NavLink>
    </li>
  ));
  return <ul className={className}>{page}</ul>;
};
