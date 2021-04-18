export class CreateUserDto {
  id: number;
  name: string;
  email: string;

  constructor(obj: any) {
    if (!obj.id || typeof obj.id !== "number")
      throw "IDは数字しか入力できません";
    if (!obj.name || typeof obj.name !== "string")
      throw "Nameは文字のみ入力できます";
    if (!obj.email || typeof obj.email !== "string")
      throw "Emailは文字のみ入力できます";

    this.id = obj.id;
    this.name = obj.name;
    this.email = obj.email;
  }
}
