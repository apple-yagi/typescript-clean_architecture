export class CreateUserDto {
	name: string;
	email: string;

	constructor(obj: any) {
		if (!obj.name || typeof obj.name !== "string")
			throw "Nameは文字のみ入力できます";
		if (!obj.email || typeof obj.email !== "string")
			throw "Emailは文字のみ入力できます";

		this.name = obj.name;
		this.email = obj.email;
	}
}
