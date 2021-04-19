import { User } from "../../entity/user";

export class UserResponse {
  name: string;
  email: string;

  static toViewModel(user: User): UserResponse {
    return {
      name: user.name,
      email: user.email
    };
  }
}
