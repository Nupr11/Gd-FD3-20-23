import { getPhotosByAlbumId } from "../../../../../../../../api/requests";
import { useData } from "../../../../../../../../hooks/useData";
import styles from "./albumPhoto.module.css";

export const AlbumPhoto = ({ id }) => {
  const { data, loading, error } = useData(getPhotosByAlbumId(id), {});

  const handleImageClick = (url) => {
    window.open(url, "_blank").focus();
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching user data</div>;
  }

  const albumHeader = <h1>Album #{id} albums's photos</h1>;
  const photos = (
    <ul className={styles.photoList}>
      {data.map((photo) => (
        <li className={styles.photoCard} key={photo.id}>
          <h5>{photo.title}</h5>
          <img
            target="_blank"
            onClick={() => handleImageClick(photo.url)}
            src={photo.thumbnailUrl}
            alt={photo.title}
          />
        </li>
      ))}
    </ul>
  );

  return (
    <section className={styles.photoList}>
      {albumHeader}
      {photos}
    </section>
  );
};
