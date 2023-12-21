import { Dispatch, FC, FormEvent, SetStateAction } from "react";
import { IUser } from "../contexts/user";
import { ENV_REGION } from "../constants/environment.constant";

interface IFormProps {
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser>>;
}

export const Form: FC<IFormProps> = ({ user, setUser }) => {
  const regionName = ENV_REGION === "pt" ? "Portugal Old" : "Colombia Old";

  function onChange(e: FormEvent<HTMLInputElement>) {
    const name = e.currentTarget.name;
    const value = e.currentTarget?.value || "";

    setUser((old: IUser) => ({
      ...old,
      [name]: { value, message: "" },
    }));
  }

  return (
    <form>
      <h1>{regionName}</h1>
      <div>
        <input type="text" name="name" id="name" onChange={onChange} />
      </div>
      <div>
        <input type="email" name="email" id="email" onChange={onChange} />
      </div>
      <div>
        <button>Send</button>
      </div>
      <br />
      <br />
      <div>Name: {user.name?.value}</div>
      <div>Email: {user.email?.value}</div>
    </form>
  );
};
