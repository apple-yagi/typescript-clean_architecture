import { User } from "../../../entity/user";

export abstract class IUserController {
  index: () => User[];
  show: (id: number) => User;
  create: (user: number) => User;
  delete: (id: number) => User;
}
