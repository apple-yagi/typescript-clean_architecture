import { Router } from "express";
import { UserController } from "../../adapter/controller/user.controller";
import { UserInteractor } from "../../usecase/user.interactor";
import { PGUserRepository } from "../database/postgres/repository/user.repository.pg";
import { InmemoryUserRepository } from "../inmemory/user.repository.inmemory";

const router = Router();

// InMemory
// const userController = new UserController(
// 	new UserInteractor(new InmemoryUserRepository())
// );

// Postgres
const userController = new UserController(
	new UserInteractor(new PGUserRepository())
);

router.get("/", async (req, res) => {
	const json = await userController.index();
	res.json(json);
});

router.get("/:id", async (req, res) => {
	const data = await userController.show(req);
	res.json(data);
});

router.post("/", async (req, res) => {
	const data = await userController.create(req);
	res.json(data);
});

router.delete("/:id", async (req, res) => {
	const data = await userController.delete(req);
	res.json({ deletedId: data });
});

export const usersRouter = router;
