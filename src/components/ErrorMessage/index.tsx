import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.scss";

const ErrorMessage = ({ message }: { message?: string }) => {
  return message ? (
    <div className={styles.error}>
      <FontAwesomeIcon
        icon={faCircleExclamation}
        className={styles.errorIcon}
      />
      <p className={styles.errorMessage}>{message}</p>
    </div>
  ) : null;
};

export default ErrorMessage;
