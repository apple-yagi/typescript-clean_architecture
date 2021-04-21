import { Connection, createConnection } from "typeorm";

const isDev = process.env.NODE_ENV === "development";

export const connection = (): Promise<Connection> => {
	try {
		return createConnection({
			type: "postgres",
			host: process.env.POSTGRES_HOST || "localhost",
			port: parseInt(process.env.POSTGRES_PORT) || 5432,
			username: process.env.POSTGRES_USER || "postgres",
			password: process.env.POSTGRES_PASSWORD || "password",
			database: process.env.POSTGRES_DB || "postgres",
			entities: [
				process.cwd() +
					"/src/api/infrastructure/database/postgres/entity/*.entity.ts"
			],
			synchronize: isDev,
			logging: isDev ? "all" : ["error"]
		});
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
};
