import { useData } from "../../../../../../../../hooks/useData";
import styles from "./userInfo.module.css";
import { getUserById } from "../../../../../../../../api/requests";

export const UserInfo = ({ userId, children }) => {
  const { data, loading, error } = useData(getUserById(userId), {});

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching user data</div>;
  }

  const userHeader = <h1>{data.name}'s Profile</h1>;
  const userInfo = (
    <ul className={styles.infoList}>
      <li>Username: {data.username}</li>
      <li>Email: {data.email}</li>
      <li>Company: {data.company?.name}</li>
    </ul>
  );

  return (
    <div className={styles.userInfo}>
      {userHeader}
      {userInfo}
      {children}
    </div>
  );
};
