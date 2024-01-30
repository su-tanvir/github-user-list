import { Link } from "react-router-dom";
import { useUsers } from "../../hooks/useUsers";
import styles from "./styles.module.scss";

export default function UserList() {
  const { loading, users } = useUsers();

  if (!loading && !users) return;
  return (
    <section className={styles.root}>
      {users?.length === 0 && <p>No user found</p>}
      {loading && <p>Loading ...</p>}
      <ul className={styles.list}>
        {users?.map(({ id, login }) => (
          <li key={id} className={styles.item}>
            <Link to={`/users/${login}`}>
              <p>Username: {login}</p>
              <p>User id: {id}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
