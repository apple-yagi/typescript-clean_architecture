export class CustomError extends Error {
	code: number;
	data: Date;

	constructor(code = 500, ...params) {
		super(...params);

		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, CustomError);
		}

		this.code = code;
		this.data = new Date();
	}
}
