import styles from "./albumList.module.css";
import { Link } from "react-router-dom";
import { useData } from "../../../../hooks/useData";
import { getAllAlbums, getAllPhotos } from "../../../../api/requests";

export const AlbumsList = ({ className }) => {
  const {
    data: albumsData,
    loading: albumsLoading,
    error: albumsError,
  } = useData(getAllAlbums());
  const {
    data: photosData,
    loading: photosLoading,
    error: photosError,
  } = useData(getAllPhotos());
  console.log(photosData);

  if (albumsLoading || photosLoading) {
    return <div>Loading...</div>;
  }

  if (albumsError || photosError) {
    return <div>Error fetching data</div>;
  }

  const albumList = albumsData.map((album, index) => (
    <li className={styles.card} key={album.id}>
      <Link to={`/albums/${album.id}`}>
        <figure className={styles.album}>
          <img
            width="200px"
            height="300px"
            src={photosData[index].thumbnailUrl}
            alt={album.title}
          />
          <figcaption> {album.title}</figcaption>
        </figure>
      </Link>
    </li>
  ));

  return <ul className={styles.albumList}>All albums: {albumList}</ul>;
};
