import { useState } from "react";
import { useUsers } from "../../hooks/useUsers";
import ErrorMessage from "../ErrorMessage";
import styles from "./styles.module.scss";

export const DEFAULT_UNSEARCHABLE_WORD = "tanvir";

interface SearchFormProps {
  unsearchableWord?: string;
}

export default function SearchForm({
  unsearchableWord = DEFAULT_UNSEARCHABLE_WORD,
}: SearchFormProps) {
  const [username, setUsername] = useState("");
  const [isSearchable, setIsSearchable] = useState(true);
  const [error, setError] = useState("");
  const { searchUsersByKeyword } = useUsers();

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username.length < 4) {
      setError("Search text must be at least 4 characters");
    } else if (username === unsearchableWord) {
      setError("Search is not allowed for this word");
    } else {
      setError("");
      setIsSearchable(false);
      searchUsersByKeyword(
        username,
        () => setError("There has been a search error. Please, try again."),
        () => setIsSearchable(true)
      );
    }
  };

  return (
    <section className={styles.root}>
      <form className={styles.form} onSubmit={(e) => handleOnSubmit(e)}>
        <input
          className={styles.input}
          type="text"
          name="username"
          placeholder="Enter user name ..."
          value={username}
          autoFocus={false}
          autoComplete="off"
          onChange={(e) => setUsername(e.target.value)}
        />
        <button className={styles.button} disabled={!isSearchable}>
          Search
        </button>
      </form>
      <ErrorMessage message={error} />
    </section>
  );
}
