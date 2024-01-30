import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { UserProfile } from "../types/user";

export type UsersContextProps = {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  users: UserProfile[] | null;
  setUsers: Dispatch<SetStateAction<UserProfile[] | null>>;
};

export const UsersContext = createContext({} as UsersContextProps);

interface UsersContextProviderProps {
  children: ReactNode;
}

export const UsersContextProvider: FC<UsersContextProviderProps> = ({
  children,
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<UserProfile[] | null>(null);

  return (
    <UsersContext.Provider
      value={{
        loading,
        setLoading,
        users,
        setUsers,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
