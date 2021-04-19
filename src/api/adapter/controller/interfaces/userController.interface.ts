import { User } from "../../../entity/user";
import { Context } from "../../interface/context";
import { UserResponse } from "../../view-model/user.vm";

export abstract class IUserController {
  index: () => Promise<User[]>;
  show: (ctx: Context) => Promise<UserResponse>;
  create: (ctx: Context) => Promise<User>;
  delete: (ctx: Context) => Promise<number>;
}
