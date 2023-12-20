import { ReactNode } from "react";
import { IService } from "./service.interface";

export abstract class BaseService implements IService {
  render(): ReactNode {
    return null;
  }
}
