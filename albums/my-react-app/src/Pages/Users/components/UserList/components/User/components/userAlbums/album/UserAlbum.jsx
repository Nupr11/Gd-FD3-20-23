import { Link, useParams } from "react-router-dom";
import { Layout } from "../../../../../../components/Layout/Layout";
import { AlbumInfo } from "./components/albumInfo";
import styles from "./album.module.css";
import { AlbumPhoto } from "./components/albumPhoto/albumPhoto";

export const UserAlbum = () => {
  const { albumId } = useParams();
};
