import { Link, useParams } from "react-router-dom";
import { Layout } from "../../../../../../components/Layout/Layout";
import { AlbumInfo } from "./components/albumInfo";
import styles from "./album.module.css";
import { AlbumPhoto } from "./components/albumPhoto/albumPhoto";
import { ButtonBack } from "../../../../../../components/buttonBack";

export const Album = () => {
  const { id } = useParams();

  return (
    <Layout>
      <AlbumInfo className={styles.albumInfo} id={id}>
        <>
          <ButtonBack />
          <Link to={`/users/${id}`}>Go to author's profile</Link>
        </>
        <AlbumPhoto id={id} />.
      </AlbumInfo>
    </Layout>
  );
};
