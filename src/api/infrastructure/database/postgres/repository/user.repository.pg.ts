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

	FindAll(): Promise<UserEntity[]> {
		return this.conn
			.createQueryBuilder()
			.select("user")
			.from(UserEntity, "user")
			.getMany();
	}

	FindById(id: number): Promise<UserEntity> {
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

		return insertResult.generatedMaps[0] as UserEntity;
	}

	async Delete(id: number) {
		const findUser = await this.FindById(id);
		if (!findUser) throw `Not Found User by ${id}`;

		await this.conn
			.createQueryBuilder()
			.delete()
			.from(UserEntity)
			.where("id = :id", { id: id })
			.execute();

		return id;
	}
}
