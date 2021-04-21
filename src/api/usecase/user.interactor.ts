import { CreateUserDto } from "../adapter/controller/dto/craete-user.dto";
import { IUserRepository } from "../infrastructure/interfaces/userRepository.interface";
import { IUserInteractor } from "./interfaces/userInteractor.interface";

export class UserInteractor implements IUserInteractor {
	private userRepository: IUserRepository;

	constructor(r: IUserRepository) {
		this.userRepository = r;
	}

	async ListUser() {
		return this.userRepository.FindAll();
	}

	async GetUserById(id: number) {
		const findUser = await this.userRepository.FindById(id);

		if (!findUser) throw `Not Found User by ${id}`;

		return findUser;
	}

	Create(u: CreateUserDto) {
		return this.userRepository.Create(u);
	}

	Delete(id: number) {
		return this.userRepository.Delete(id);
	}
}
