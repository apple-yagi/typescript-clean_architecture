import { IsEmail, Length, validate } from "class-validator";
import { CustomError } from "../../../common/error/custom-error";

export class CreateUserDto {
	@Length(4, 20)
	name: string;

	@IsEmail()
	email: string;

	constructor(obj: any) {
		this.name = obj.name;
		this.email = obj.email;
	}

	public async validateInput() {
		const validateResult = await validate(this);
		if (validateResult.length) throw new CustomError(400, validateResult);
		return;
	}
}
