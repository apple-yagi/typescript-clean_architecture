import { Connection } from "typeorm";
import { connection } from "../connection";
import { IUserRepository } from "../../../interfaces/userRepository.interface";
import { CreateUserDto } from "../../../../adapter/controller/dto/craete-user.dto";
import { UserEntity } from "../entity/user.entity";

export class PGUserRepository implements IUserRepository {
	private conn: Connection;
	constructor() {
		connection().then(c => (this.conn = c));
	}

	FindAll() {
		console.log(
			this.conn
				.createQueryBuilder()
				.select("user")
				.from(UserEntity, "user")
				.getSql()
		);

		return this.conn
			.createQueryBuilder()
			.select("user")
			.from(UserEntity, "user")
			.execute();
	}

	FindById(id: number) {
		return this.conn
			.createQueryBuilder()
			.select("user")
			.from(UserEntity, "user")
			.where("user.id = :id", { id: id })
			.getOne();
	}

	async Create(user: CreateUserDto) {
		const insertResult = await this.conn
			.createQueryBuilder()
			.insert()
			.into(UserEntity)
			.values([user])
			.execute();

		console.log(`execute sql: ${insertResult.raw}`);
		return insertResult.generatedMaps[0] as UserEntity;
	}

	async Delete(id: number) {
		const deleteResult = await this.conn
			.createQueryBuilder()
			.delete()
			.from(UserEntity)
			.where("id = :id", { id: id })
			.execute();

		console.log(`execute sql: ${deleteResult.raw}`);
		return id;
	}
}
