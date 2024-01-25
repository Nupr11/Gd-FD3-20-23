import { Link } from "react-router-dom";
import { getAlbumsByUserId } from "../../../../../../../../api/requests";
import { useData } from "../../../../../../../../hooks/useData";
import styles from "./userAlbums.module.css";

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
      <Link to={`/users/${userId}/albums/${album.id}`}>{album.title}</Link>
    </li>
  ));

  return (
    <div className={styles.albumsInfo}>
      {listTitle}
      <ul className={styles.albumList}>{albumList}</ul>
    </div>
  );
};
