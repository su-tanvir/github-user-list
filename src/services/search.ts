import { BASE_API_URL } from "../constants/config";
import { GitHubUserSearchResponse } from "../types/response";
import { makeApiCall } from "./apiCall";

export const searchUsersByKeyword = async ({
  keyword,
  searchLimit = 10,
}: {
  keyword: string;
  searchLimit?: number;
}) => {
  const url = `${BASE_API_URL}/search/users?q=${keyword}&per_page=${searchLimit}`;

  const { items } = await makeApiCall<GitHubUserSearchResponse>({
    url: url,
    options: {
      method: "GET",
    },
  });

  return items;
};
