import { IUserRepository } from "./interfaces/userRepository.interface";
import { users } from "../../infrastructure/inmemory/user.inmemory";
import { User } from "../../entity/user";

export class UserRepository implements IUserRepository {
  constructor() {}

  FindAll() {
    return users;
  }

  FindById(id: number) {
    return users.find(user => user.id == id);
  }

  Create(u: User) {
    users.push(u);
    return u;
  }

  Delete(id: number) {
    let deletedUser: User;
    users.some(function (user, i) {
      if (user.id === id) {
        users.splice(i, 1);
        deletedUser = user;
      }
    });

    return deletedUser;
  }
}
