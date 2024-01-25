import styles from "./albumList.module.css";
import { Link } from "react-router-dom";
import { useData } from "../../../../hooks/useData";
import { getAllAlbums, getAllPhotos } from "../../../../api/requests";

export const AlbumsList = ({ className }) => {
  const {
    data: albums,
    loading: loadingAlbums,
    error: errorAlbums,
  } = useData(getAllAlbums(), []);
  const {
    data: photos,
    loading: loadingPhotos,
    error: errorPhotos,
  } = useData(getAllPhotos(), []);

  if (loadingAlbums || loadingPhotos) {
    return <div>Loading...</div>;
  }

  if (errorAlbums || errorPhotos) {
    return <div>Error fetching data</div>;
  }

  const albumList = albums.map((album, index) => (
    <li className={styles.card} key={album.id}>
      <Link to={`/albums/${album.id}`}>
        <figure className={styles.album}>
          <img
            width="200px"
            height="300px"
            src={photos[album.id].thumbnailUrl}
            alt={photos[album.id].id.title}
          />
          <figcaption>{album.title}</figcaption>
        </figure>
      </Link>
    </li>
  ));

  return (
    <section className={styles.section}>
      <h2>All albums:</h2>
      <ul className={styles.albumList}>{albumList}</ul>;
    </section>
  );
};
