import { useParams } from "react-router-dom";
import Header from "../../components/Title";
import UserProfile from "../../components/UserProfile";

export default function UserDetails() {
  const { username } = useParams<{ username: string }>();
  return (
    <>
      <Header />
      <UserProfile username={String(username)} />
    </>
  );
}
