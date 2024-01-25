import styles from "./User.module.css";
import { useParams } from "react-router-dom";
import { Layout } from "../../../../../../components/Layout/Layout";
import { Link } from "react-router-dom";
import { UserAlbums, UserInfo } from "./components";
import { ButtonBack } from "../../../../../../components/buttonBack";

export const User = () => {
  const { id, userId } = useParams();

  return (
    <Layout>
      <ButtonBack />
      <UserInfo className={styles.userInfo} userId={id}>
        <UserAlbums className={styles.albumList} userId={id} />
      </UserInfo>
    </Layout>
  );
};
