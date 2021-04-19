import { IUserRepository } from "../interfaces/userRepository.interface";
import { User } from "../../entity/user";
import { CreateUserDto } from "../../adapter/controller/dto/craete-user.dto";

export class UserRepository implements IUserRepository {
  private users: User[] = [
    {
      id: 1,
      name: "test",
      email: "test@example.com"
    }
  ];

  FindAll() {
    return this.users;
  }

  FindById(id: number) {
    return this.users.find(user => user.id == id);
  }

  Create(u: CreateUserDto) {
    const createUser: User = {
      id: this.getRandomInt(),
      name: u.name,
      email: u.email
    };
    this.users.push(createUser);
    return createUser;
  }

  Delete(id: number) {
    const targetIndex = this.users.findIndex(user => user.id === id);
    const deleteUser = this.users[targetIndex];
    this.users.splice(targetIndex, 1);

    return deleteUser;
  }

  private getRandomInt() {
    return Math.floor(Math.random() * 1000);
  }
}
