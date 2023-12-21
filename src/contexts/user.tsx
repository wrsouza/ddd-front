import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

export interface IUserField {
  value?: string;
  message?: string;
}

export interface IUser {
  name: IUserField;
  email: IUserField;
}

export interface IUserContext {
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser>>;
}

export interface IUserProps {
  children?: ReactNode;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider: FC<IUserProps> = ({ children }) => {
  const [user, setUser] = useState<IUser>({ 
    name: { 
      value:"", 
      message: "" 
    }, 
    email: { 
      value: "", 
      message: "" 
    } 
  });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext<IUserContext>(UserContext);
};
