import styles from "./UserList.module.css";
import { Link } from "react-router-dom";
import { useData } from "../../../../hooks/useData";
import { getAllUsers } from "../../../../api/requests";

export const UserList = ({ className }) => {
  const { data, loading, error } = useData(getAllUsers(), []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data</div>;
  }

  const userList = data.map((user) => (
    <li key={user.id}>
      <Link to={`/users/${user.id}`}>{user.name}</Link>
    </li>
  ));

  return <ul className={className}>All users: {userList}</ul>;
};
