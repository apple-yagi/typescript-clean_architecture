import { CreateUserDto } from "../../adapter/controller/dto/craete-user.dto";
import { User } from "../../entity/user";

export abstract class IUserRepository {
	FindAll: () => Promise<User[]>;
	FindById: (id: number) => Promise<User>;
	Create: (u: CreateUserDto) => Promise<User>;
	Delete: (id: number) => Promise<number>;
}
