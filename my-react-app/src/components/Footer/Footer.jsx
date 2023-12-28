import styles from "./Footer.module.css";
import { SocialList } from "./components/Social/Social";

export const Footer = ({ className, social }) => {
  return (
    <footer className={className}>
      <SocialList social={social} className={styles.socialList} />
    </footer>
  );
};
