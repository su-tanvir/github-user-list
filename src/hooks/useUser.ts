import { UserProfile } from "../types/user";
import { useFetch } from "./useFetch";
import { useUsers } from "./useUsers";

export function useUser({ username }: { username: string }) {
  const { users } = useUsers();
  let profile = users?.find((user) => user.login === username);

  const { loading, data, error } = useFetch<UserProfile>({
    isFetchable: profile === undefined,
    url: `https://api.github.com/users/${username}`,
    options: {
      method: "GET",
    },
  });

  if (!profile) {
    profile = data;
  }

  return { loading, profile, error };
}
