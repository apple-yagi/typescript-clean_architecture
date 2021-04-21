import { CreateUserDto } from "../adapter/controller/dto/craete-user.dto";
import { User } from "../domain/user";
import { IUserRepository } from "../infrastructure/interfaces/userRepository.interface";
import { IUserInteractor } from "./interfaces/userInteractor.interface";

export class UserInteractor implements IUserInteractor {
	private userRepository: IUserRepository;

	constructor(r: IUserRepository) {
		this.userRepository = r;
	}

	ListUser() {
		return this.userRepository.FindAll();
	}

	GetUserById(id: number) {
		return this.userRepository.FindById(id);
	}

	Create(u: CreateUserDto) {
		return this.userRepository.Create(u);
	}

	Delete(id: number) {
		return this.userRepository.Delete(id);
	}
}
