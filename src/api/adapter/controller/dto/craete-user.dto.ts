import { IsEmail, IsNotEmpty, Length, validate } from "class-validator";
import { CustomError } from "../../../common/error/custom-error";

export class CreateUserDto {
	@IsNotEmpty()
	@Length(4, 20)
	name: string;

	@IsNotEmpty()
	@IsEmail()
	email: string;

	@IsNotEmpty()
	password: string;

	constructor(obj: any) {
		this.name = obj.name;
		this.email = obj.email;
		this.password = obj.password;
	}

	public async validateInput() {
		const validateResult = await validate(this);
		if (validateResult.length) throw new CustomError(400, validateResult);
		return;
	}
}
