import { getAlbumById } from "../../../../../../../../api/requests";
import { useData } from "../../../../../../../../hooks/useData";
import styles from "./albumInfo.module.css";

export const AlbumInfo = ({ id, children }) => {
  const { data, loading, error } = useData(getAlbumById(id), {});

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching user data</div>;
  }

  const albumHeader = (
    <h1>
      #{data.id} : {data.title}'s Info
    </h1>
  );
  const albumInfo = <ul className={styles.infoList}></ul>;

  return (
    <div className={styles.albumInfo}>
      {albumHeader}
      {albumInfo}
      {children}
    </div>
  );
};
