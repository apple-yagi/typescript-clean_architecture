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

	async index(): Promise<UserResponse[]> {
		const users = await this.userInteractor.ListUser();
		return users.map(user => UserResponse.toViewModel(user));
	}

	async show(ctx: Context): Promise<UserResponse> {
		const id = parseInt(ctx.params.id);
		const findUser = await this.userInteractor.GetUserById(id);
		return UserResponse.toViewModel(findUser);
	}

	async create(ctx: Context): Promise<UserResponse> {
		const createUserDto = new CreateUserDto(ctx.body);
		const user = await this.userInteractor.Create(createUserDto);
		return UserResponse.toViewModel(user);
	}

	delete(ctx: Context): Promise<number> {
		const id = parseInt(ctx.params.id);
		return this.userInteractor.Delete(id);
	}
}
