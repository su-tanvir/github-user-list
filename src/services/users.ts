import { BASE_API_URL } from "../constants/config";
import { UserProfile } from "../types/user";
import { makeApiCall } from "./apiCall";

export const getUserProfileByUsername = async ({
  username,
}: {
  username: string;
}) => {
  const url = `${BASE_API_URL}/users/${username}`;

  const data = await makeApiCall<UserProfile>({
    url: url,
    options: {
      method: "GET",
    },
  });

  return data;
};
