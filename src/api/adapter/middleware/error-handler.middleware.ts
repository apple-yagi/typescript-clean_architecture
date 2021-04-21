import { NextFunction, Request, Response } from "express";
import { CustomError } from "../../common/error/custom-error";

export function ErrorHandler(
	err,
	req: Request,
	res: Response,
	next: NextFunction
) {
	console.log(err);
	if (err instanceof CustomError) {
		return res
			.status(err.code)
			.json({ statusCode: err.code, message: err.message });
	} else {
		return res.status(500).json({
			statusCode: 500,
			message: "An unexpected error has occurred",
			error: err
		});
	}
}
