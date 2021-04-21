import { Response } from "express";

export abstract class IUserController {
	index: (req: Express.Request, res: Express.Response) => Promise<Response>;
	show: (req: Express.Request, res: Express.Response) => Promise<Response>;
	create: (req: Express.Request, res: Express.Response) => Promise<Response>;
	delete: (req: Express.Request, res: Express.Response) => Promise<Response>;
}
