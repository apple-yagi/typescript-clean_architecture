import { Context } from "../../interface/context";
import { UserResponse } from "../../view-model/user.vm";

export abstract class IUserController {
	index: () => Promise<UserResponse[]>;
	show: (ctx: Context) => Promise<UserResponse>;
	create: (ctx: Context) => Promise<UserResponse>;
	delete: (ctx: Context) => Promise<number>;
}
