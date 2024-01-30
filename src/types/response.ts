import { User } from "./user";

export interface GitHubUserSearchResponse {
  total_count: number;
  incomplete_results: boolean;
  items: User[];
}
