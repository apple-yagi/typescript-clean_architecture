import { NextFunction, Request, Response } from "express";
import { CustomError } from "../../common/error/custom-error";
import { IUserInteractor } from "../../usecase/interfaces/userInteractor.interface";
import { UserResponse } from "../view-model/user.vm";
import { CreateUserDto } from "./dto/craete-user.dto";
import { IUserController } from "./interfaces/userController.interface";

export class UserController implements IUserController {
	private userInteractor: IUserInteractor;
	constructor(i: IUserInteractor) {
		this.userInteractor = i;
	}

	async index(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<Response> {
		try {
			const users = await this.userInteractor.ListUser();
			return res.status(200).json({
				statusCode: 200,
				data: users.map(user => UserResponse.toViewModel(user))
			});
		} catch (err) {
			next(err);
		}
	}

	async show(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<Response> {
		try {
			const id = parseInt(req.params.id);
			if (isNaN(id))
				throw new CustomError(400, `Invalid params id: ${req.params.id}`);

			const findUser = await this.userInteractor.GetUserById(id);
			return res
				.status(200)
				.json({ statusCode: 200, data: UserResponse.toViewModel(findUser) });
		} catch (err) {
			next(err);
		}
	}

	async create(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<Response> {
		try {
			const createUserDto = new CreateUserDto(req.body);

			// 入力値が無効の場合、Custom Errorをthrowする
			await createUserDto.validateInput();

			const createdUser = await this.userInteractor.Create(createUserDto);
			return res
				.status(201)
				.json({ statusCode: 204, data: UserResponse.toViewModel(createdUser) });
		} catch (err) {
			next(err);
		}
	}

	async delete(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<Response> {
		try {
			const id = parseInt(req.params.id);
			if (isNaN(id))
				throw new CustomError(400, `Invalid params id: ${req.params.id}`);

			await this.userInteractor.Delete(id);
			return res.status(204).json({ statusCode: 204 });
		} catch (err) {
			next(err);
		}
	}
}
