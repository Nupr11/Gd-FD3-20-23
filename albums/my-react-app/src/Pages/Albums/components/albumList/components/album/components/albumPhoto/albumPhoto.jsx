import { getPhotosByAlbumId } from "../../../../../../../../api/requests";
import { useData } from "../../../../../../../../hooks/useData";
import styles from "./albumPhoto.module.css";

export const AlbumPhoto = ({ id }) => {
  const { data, loading, error } = useData(getPhotosByAlbumId(id), {});

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching user data</div>;
  }

  const albumHeader = <h1>#{id} albums's photos</h1>;
  const albumInfo = (
    <ul className={styles.infoList}>
      {data.map((photo) => (
        <li>
          <h5>{photo.title}</h5>
          <img target="_blank" src={photo.thumbnailUrl} alt={photo.title} />
        </li>
      ))}
    </ul>
  );

  return (
    <div className={styles.albumInfo}>
      {albumHeader}
      {albumInfo}
    </div>
  );
};
