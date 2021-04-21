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

router.get("/", (req, res) => {
	return userController.index(req, res);
});

router.get("/:id", (req, res) => {
	return userController.show(req, res);
});

router.post("/", (req, res) => {
	return userController.create(req, res);
});

router.delete("/:id", (req, res) => {
	return userController.delete(req, res);
});

export const usersRouter = router;
