import { IUserInteractor } from "../../usecase/interfaces/userInteractor.interface";
import { CreateUserDto } from "./dto/craete-user.dto";
import { IUserController } from "./interfaces/userController.interface";

export class UserController implements IUserController {
  private userInteractor: IUserInteractor;
  constructor(i: IUserInteractor) {
    this.userInteractor = i;
  }

  index() {
    return this.userInteractor.ListUser();
  }

  show(id: number) {
    return this.userInteractor.GetUserById(id);
  }

  create(args: any) {
    const createUserDto = new CreateUserDto(args);
    return this.userInteractor.Create({
      id: createUserDto.id,
      name: createUserDto.name,
      email: createUserDto.email
    });
  }

  delete(id: number) {
    return this.userInteractor.Delete(id);
  }
}
