import { CreateUserDto } from "../../adapter/controller/dto/craete-user.dto";
import { User } from "../../entity/user";

export abstract class IUserInteractor {
	ListUser: () => User[];
	GetUserById: (id: number) => User;
	Create: (u: CreateUserDto) => User;
	Delete: (id: number) => User;
}
