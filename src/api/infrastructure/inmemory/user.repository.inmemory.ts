import { IUserRepository } from "../interfaces/userRepository.interface";
import { User } from "../../entity/user";
import { CreateUserDto } from "../../adapter/controller/dto/craete-user.dto";

export class InmemoryUserRepository implements IUserRepository {
  private users: User[] = [
    {
      id: 1,
      name: "test",
      email: "test@example.com"
    }
  ];

  FindAll() {
    return Promise.resolve(this.users);
  }

  FindById(id: number) {
    return Promise.resolve(this.users.find(user => user.id == id));
  }

  Create(u: CreateUserDto) {
    const createUser: User = {
      id: this.getRandomInt(),
      name: u.name,
      email: u.email
    };
    this.users.push(createUser);
    return Promise.resolve(createUser);
  }

  Delete(id: number) {
    const targetIndex = this.users.findIndex(user => user.id === id);
    this.users.splice(targetIndex, 1);

    return Promise.resolve(id);
  }

  private getRandomInt() {
    return Math.floor(Math.random() * 1000);
  }
}
