import { Connection, createConnection } from "typeorm";

export const connection = (): Promise<Connection> => {
  return createConnection({
    type: "postgres",
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME || "postgres",
    password: process.env.DB_PASSWORD || "password",
    database: process.env.DB_NAME || "postgres",
    entities: [process.cwd() + "/src/api/entity/*.ts"],
    synchronize: true
  });
};
