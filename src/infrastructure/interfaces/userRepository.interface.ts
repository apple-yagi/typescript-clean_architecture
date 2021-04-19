import { CreateUserDto } from "../../adapter/controller/dto/craete-user.dto";
import { User } from "../../entity/user";

export abstract class IUserRepository {
	FindAll: () => User[];
	FindById: (id: number) => User;
	Create: (u: CreateUserDto) => User;
	Delete: (id: number) => User;
}
