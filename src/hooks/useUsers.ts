import { useContext } from "react";
import { UsersContext } from "../contexts/UsersContext";
import { searchUsersByKeyword as searchUsers } from "../services/search";
import { getUserProfileByUsername } from "../services/users";
import { UserProfile } from "../types/user";

export function useUsers() {
  const context = useContext(UsersContext);
  if (!context) throw new Error("UsersContext not found");
  const { loading, setLoading, users, setUsers } = context;

  const searchUsersByKeyword = (
    keyword: string,
    errorHandler?: () => void,
    finallyHandler?: () => void
  ) => {
    setLoading(true);
    searchUsers({ keyword })
      .then(async (data) => {
        const profilePromises = data.map((user) =>
          getUserProfileByUsername({ username: user.login })
        );
        const results = await Promise.allSettled(profilePromises);
        const profiles: UserProfile[] = [];
        results.forEach((result) => {
          if (result.status === "fulfilled") {
            profiles.push(result.value);
          }
        });
        setUsers(profiles);
      })
      .catch(() => {
        errorHandler && errorHandler();
      })
      .finally(() => {
        setLoading(false);
        finallyHandler && finallyHandler();
      });
  };

  return { loading, users, searchUsersByKeyword };
}
