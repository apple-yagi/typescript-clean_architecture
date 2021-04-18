import { IUserRepository } from "../adapter/repository/interfaces/userRepository.interface";
import { User } from "../entity/user";
import { IUserInteractor } from "./interfaces/userInteractor.interface";

export class UserInteractor implements IUserInteractor {
  private userRepository: IUserRepository;

  constructor(r: IUserRepository) {
    this.userRepository = r;
  }

  ListUser() {
    return this.userRepository.FindAll();
  }

  GetUserById(id: number) {
    return this.userRepository.FindById(id);
  }

  Create(u: User) {
    return this.userRepository.Create(u);
  }

  Delete(id: number) {
    return this.userRepository.Delete(id);
  }
}
