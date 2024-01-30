import { faQrcode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useUser } from "../../hooks/useUser";
import ErrorMessage from "../ErrorMessage";
import styles from "./styles.module.scss";

export default function UserProfile({ username }: { username: string }) {
  const { loading, profile, error } = useUser({ username });

  return (
    <section className={styles.root}>
      {loading && <p>Loading ...</p>}
      {error && <ErrorMessage message="User not found" />}
      {profile && (
        <div className={styles.profile}>
          <img className={styles.img} src={profile.avatar_url} alt="Avatar" />
          <div className={styles.info}>
            <a
              className={styles.user}
              href={profile.html_url}
              target="_blank"
              rel="noreferrer"
            >
              <h4 className={styles.name}>{profile.name}</h4>
              <FontAwesomeIcon icon={faQrcode} />
              {/* Pro icons: <FontAwesomeIcon icon={["fab", "github"]} /> */}
            </a>
            <em className={styles.username}>{profile.login}</em>
            {profile.bio && <p className={styles.bio}>{profile.bio}</p>}
          </div>
        </div>
      )}
    </section>
  );
}
