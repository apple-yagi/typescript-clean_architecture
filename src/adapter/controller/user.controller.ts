import { IUserInteractor } from "../../usecase/interfaces/userInteractor.interface";
import { Context } from "../interface/context";
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

	show(ctx: Context) {
		const id = parseInt(ctx.params.id);
		return this.userInteractor.GetUserById(id);
	}

	create(ctx: Context) {
		const createUserDto = new CreateUserDto(ctx.body);
		return this.userInteractor.Create(createUserDto);
	}

	delete(ctx: Context) {
		const id = parseInt(ctx.params.id);
		return this.userInteractor.Delete(id);
	}
}
