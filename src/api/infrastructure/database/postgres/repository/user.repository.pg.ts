import { User } from "../../../../entity/user";
import { Connection } from "typeorm";
import { connection } from "../connection";
import { IUserRepository } from "../../../interfaces/userRepository.interface";

export class PGUserRepository implements IUserRepository {
  private conn: Connection;
  constructor() {
    connection().then(c => (this.conn = c));
  }

  FindAll() {
    return this.conn
      .createQueryBuilder()
      .select("user")
      .from(User, "user")
      .getMany();
  }

  FindById(id: number) {
    return this.conn
      .createQueryBuilder()
      .select("user")
      .from(User, "user")
      .where("user.id = :id", { id: id })
      .getOne();
  }

  async Create(user: User) {
    const insertResult = await this.conn
      .createQueryBuilder()
      .insert()
      .into(User)
      .values([user])
      .execute();

    console.log(`execute sql: ${insertResult.raw}`);
    return user;
  }

  async Delete(id: number) {
    const deleteResult = await this.conn
      .createQueryBuilder()
      .delete()
      .from(User)
      .where("id = :id", { id: id })
      .execute();

    console.log(`execute sql: ${deleteResult.raw}`);
    return id;
  }
}
