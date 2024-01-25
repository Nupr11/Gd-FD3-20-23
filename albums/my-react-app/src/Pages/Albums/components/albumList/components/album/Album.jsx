import { Link, useParams } from "react-router-dom";
import { Layout } from "../../../../../../components/Layout/Layout";
import { AlbumInfo } from "./components/albumInfo";
import styles from "./album.module.css";
import { AlbumPhoto } from "./components/albumPhoto/albumPhoto";

export const Album = () => {
  const { id } = useParams();

  return (
    <Layout>
      <Link to={`/users/${id}`}>Go to author's profile</Link>
      <Link to="/albums">Back</Link>
      <AlbumInfo className={styles.albumInfo} id={id}>
        <AlbumPhoto id={id} />.
      </AlbumInfo>
    </Layout>
  );
};
