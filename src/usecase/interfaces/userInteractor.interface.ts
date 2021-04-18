import { User } from "../../entity/user";

export abstract class IUserInteractor {
  ListUser: () => User[];
  GetUserById: (id: number) => User;
  Create: (u: User) => User;
  Delete: (id: number) => User;
}
