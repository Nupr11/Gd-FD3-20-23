import styles from "./Social.module.css";
import { SOCIAL_LINK } from "./../../../../data/data";
import { SocialItem } from "./components/SocialItem";

export const SocialList = ({ className }) => {
  const socialList = SOCIAL_LINK.map((link) => (
    <SocialItem
      className={styles.socialItem}
      key={link.id + link.title}
      icon={link}
    ></SocialItem>
  ));
  return <ul className={className}>{socialList}</ul>;
};
