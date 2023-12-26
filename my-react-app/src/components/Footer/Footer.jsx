import styles from "./Footer.module.css";
import { SocialList } from "./components/Social/Social";

export const Footer = ({ className }) => {
  return (
    <section className={className}>
      <SocialList className={styles.socialList} />
    </section>
  );
};
