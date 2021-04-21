import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "user" })
export class UserEntity {
	@PrimaryGeneratedColumn()
	readonly id: number;

	@Column()
	readonly name: string;

	@Column()
	readonly email: string;
}
