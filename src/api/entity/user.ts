import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
	@PrimaryGeneratedColumn("uuid")
	readonly id: number;

	@Column()
	readonly name: string;

	@Column()
	readonly email: string;

	@Column()
	readonly password: string;
}
