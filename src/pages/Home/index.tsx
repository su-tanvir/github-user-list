import { Fragment } from "react";
import SearchForm from "../../components/SearchForm";
import Header from "../../components/Title";
import UserFollowers from "../../components/UserFollowers";
import UserList from "../../components/UserList";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <SearchForm />
      <UserList />
      <UserFollowers />
    </Fragment>
  );
}
