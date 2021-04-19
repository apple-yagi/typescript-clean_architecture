import { User } from "../../../entity/user";
import { Context } from "../../interface/context";

export abstract class IUserController {
	index: () => User[];
	show: (ctx: Context) => User;
	create: (ctx: Context) => User;
	delete: (ctx: Context) => User;
}
