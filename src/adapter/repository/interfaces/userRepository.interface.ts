import { User } from "../../../entity/user";

export abstract class IUserRepository {
  FindAll: () => User[];
  FindById: (id: number) => User;
  Create: (u: User) => User;
  Delete: (id: number) => User;
}
