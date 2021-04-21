import { Connection } from "typeorm";
import { connection } from "../connection";
import { IUserRepository } from "../../../interfaces/userRepository.interface";
import { CreateUserDto } from "../../../../adapter/controller/dto/craete-user.dto";
import { User } from "../../../../entity/user";

export class PGUserRepository implements IUserRepository {
	private conn: Connection;
	constructor() {
		connection().then(c => (this.conn = c));
	}

	FindAll(): Promise<User[]> {
		return this.conn
			.createQueryBuilder()
			.select("user")
			.from(User, "user")
			.getMany();
	}

	FindById(id: number): Promise<User> {
		return this.conn
			.createQueryBuilder()
			.select("user")
			.from(User, "user")
			.where("user.id = :id", { id: id })
			.getOne();
	}

	async Create(user: CreateUserDto) {
		const insertResult = await this.conn
			.createQueryBuilder()
			.insert()
			.into(User)
			.values([user])
			.execute();

		return insertResult.generatedMaps[0] as User;
	}

	async Delete(id: number) {
		await this.conn
			.createQueryBuilder()
			.delete()
			.from(User)
			.where("id = :id", { id: id })
			.execute();

		return id;
	}
}
