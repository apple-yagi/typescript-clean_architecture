import { CreateUserDto } from "../adapter/controller/dto/craete-user.dto";
import { User } from "../entity/user";
import { IUserRepository } from "../infrastructure/interfaces/userRepository.interface";
import { IUserInteractor } from "./interfaces/userInteractor.interface";

export class UserInteractor implements IUserInteractor {
  private userRepository: IUserRepository;

  constructor(r: IUserRepository) {
    this.userRepository = r;
  }

  ListUser(): User[] {
    return this.userRepository.FindAll();
  }

  GetUserById(id: number): User {
    return this.userRepository.FindById(id);
  }

  Create(u: CreateUserDto): User {
    return this.userRepository.Create(u);
  }

  Delete(id: number): User {
    return this.userRepository.Delete(id);
  }
}
