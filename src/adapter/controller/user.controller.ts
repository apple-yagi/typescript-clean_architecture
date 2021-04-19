import { User } from "../../entity/user";
import { IUserInteractor } from "../../usecase/interfaces/userInteractor.interface";
import { Context } from "../interface/context";
import { UserResponse } from "../view-model/user.vm";
import { CreateUserDto } from "./dto/craete-user.dto";
import { IUserController } from "./interfaces/userController.interface";

export class UserController implements IUserController {
	private userInteractor: IUserInteractor;
	constructor(i: IUserInteractor) {
		this.userInteractor = i;
	}

	index(): User[] {
		return this.userInteractor.ListUser();
	}

	show(ctx: Context): UserResponse {
		const id = parseInt(ctx.params.id);
		const findUser = this.userInteractor.GetUserById(id);
		return UserResponse.toViewModel(findUser);
	}

	create(ctx: Context): User {
		const createUserDto = new CreateUserDto(ctx.body);
		return this.userInteractor.Create(createUserDto);
	}

	delete(ctx: Context): User {
		const id = parseInt(ctx.params.id);
		return this.userInteractor.Delete(id);
	}
}
