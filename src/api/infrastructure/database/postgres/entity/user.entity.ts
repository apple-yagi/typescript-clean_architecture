import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "user" })
export class UserEntity {
	@PrimaryGeneratedColumn({ name: "id" })
	readonly id: number;

	@Column({ name: "name" })
	readonly name: string;

	@Column({ name: "email" })
	readonly email: string;
}
