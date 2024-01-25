import styles from "./PageAlbums.module.css";
import { Layout } from "../../components/Layout/Layout";
import { AlbumsList } from "./components/albumList/AlbumsList";
import { Outlet } from "react-router-dom";

export const PageAlbums = () => {
  return (
    <Layout userId={<Outlet />} className={styles.container}>
      <AlbumsList />
    </Layout>
  );
};
