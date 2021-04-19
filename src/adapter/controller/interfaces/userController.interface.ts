import { User } from "../../../entity/user";
import { Context } from "../../interface/context";
import { UserResponse } from "../../view-model/user.vm";

export abstract class IUserController {
	index: () => User[];
	show: (ctx: Context) => UserResponse;
	create: (ctx: Context) => User;
	delete: (ctx: Context) => User;
}
