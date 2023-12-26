import styles from "./SocialItem.module.css";

import { HandySvg } from "handy-svg";

export const SocialItem = ({ className, icon }) => {
  const svgIcon = (
    <HandySvg
      src={icon.path}
      alt={icon.title}
      className={styles.svg}
      width="50"
      height="50"
    />
  );
  return <li className={className}>{svgIcon}</li>;
};
