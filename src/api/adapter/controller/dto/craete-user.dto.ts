import { IsEmail, Length, validate } from "class-validator";

export class CreateUserDto {
	@Length(4, 20)
	name: string;

	@IsEmail()
	email: string;

	constructor(obj: any) {
		this.name = obj.name;
		this.email = obj.email;
	}

	public validateInput() {
		return validate(this);
	}
}
