import { Link } from "react-router-dom";
import { getAlbumsByUserId } from "../../../../../../../../api/requests";
import { useData } from "../../../../../../../../hooks/useData";
import styles from "./userAlbums.module.css";
import { useParams } from "react-router-dom";

export const UserAlbums = ({ userId }) => {
  const { data, loading, error } = useData(getAlbumsByUserId(userId), []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching albums data</div>;
  }
  const listTitle = <h2>Albums</h2>;
  const albumList = data.map((album) => (
    <li key={album.id}>
      <Link to={`/albums?userId=${album.userId}`}>{album.title}</Link>
    </li>
  ));

  return (
    <div className={styles.albumsInfo}>
      {listTitle}
      <ol className={styles.albumList}>{albumList}</ol>
    </div>
  );
};
