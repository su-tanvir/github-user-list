import { Chart } from "react-google-charts";
import { useUsers } from "../../hooks/useUsers";

import styles from "./styles.module.scss";

export default function UserFollowers() {
  const { users } = useUsers();
  const data = users?.map(({ login, followers }) => [login, followers]);
  data?.unshift(["Username", "Follower"]);

  if (!data) return;

  return (
    <section className={styles.root}>
      <Chart
        chartType="LineChart"
        width="100%"
        height="400px"
        data={data}
        options={{
          title: "User followers",
          hAxis: {
            title: "Usernames",
          },
          vAxis: {
            title: "Follower",
          },
        }}
      />
    </section>
  );
}
