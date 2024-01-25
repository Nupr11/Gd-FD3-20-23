import styles from "./User.module.css";
import { useParams } from "react-router-dom";
import { Layout } from "../../../../../../components/Layout/Layout";
import { Link } from "react-router-dom";
import { UserAlbums, UserInfo } from "./components";

export const User = () => {
  const { id } = useParams();

  return (
    <Layout>
      <Link to="/users">Back</Link>
      <UserInfo className={styles.userInfo} userId={id}>
        <UserAlbums className={styles.albumList} userId={id} />
      </UserInfo>
    </Layout>
  );
};
