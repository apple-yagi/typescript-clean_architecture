import { NextFunction, Response } from "express";

export abstract class IUserController {
	index: (
		req: Express.Request,
		res: Express.Response,
		next: NextFunction
	) => Promise<Response>;
	show: (
		req: Express.Request,
		res: Express.Response,
		next: NextFunction
	) => Promise<Response>;
	create: (
		req: Express.Request,
		res: Express.Response,
		next: NextFunction
	) => Promise<Response>;
	delete: (
		req: Express.Request,
		res: Express.Response,
		next: NextFunction
	) => Promise<Response>;
}
