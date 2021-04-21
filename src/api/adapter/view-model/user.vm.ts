import { Expose, plainToClass } from "class-transformer";
import { User } from "../../domain/user";

export class UserResponse {
	@Expose()
	id: number;

	@Expose()
	name: string;

	@Expose()
	email: string;

	static toViewModel(user: User): UserResponse {
		return plainToClass(UserResponse, user, { excludeExtraneousValues: true });
	}
}
