import { Dispatch, ReactNode, SetStateAction } from "react";
import { IService } from "./service.interface";
import { Input } from "../../components/input";
import { Name } from "../models/name/name";
import { NameValidation } from "../../services/validations/name.validation";
import { IUser } from "../../contexts/user";
import { EmailValidation } from "../../services/validations/email.validation";
import { Email, IEmail } from "../models/email/email";
import { Button } from "../../components/button";

interface IPortugalProps {
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser>>;
}

export class PortugalService implements IService {
    readonly user: IUser;
    readonly name: Name;
    readonly email: IEmail;

    constructor(props: IPortugalProps) {
        const { user, setUser } = props;
        this.user = user;
        const nameValidation = new NameValidation();
        const emailValidation = new EmailValidation();
        this.name = new Name({ data: user, setData: setUser, validation: nameValidation });
        this.email = new Email['pt']({ data: user, setData: setUser, validation: emailValidation });
    }

    render(): ReactNode {
      return (
        <form>
          <h1>Portugal</h1>
          <Input {...this.name.props()} /> 
          <Input {...this.email.props()} /> 
          <Button label="Send" />
          <br /><br />
          <div>Name: {this.user.name?.value}</div>
          <div>Email: {this.user.email?.value}</div>
        </form>
      )
    }
}
