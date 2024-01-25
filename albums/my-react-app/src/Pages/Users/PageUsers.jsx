import styles from "./PageUsers.module.css";
import { Layout } from "../../components/Layout/Layout";
import { UserList } from "./components/UserList";

export const PageUsers = () => {
  return (
    <Layout className={styles.container}>
      <UserList className={styles.section} />
    </Layout>
  );
};
