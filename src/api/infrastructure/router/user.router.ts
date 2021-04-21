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

router.get("/", (req, res, next) => {
	return userController.index(req, res, next);
});

router.get("/:id", (req, res, next) => {
	return userController.show(req, res, next);
});

router.post("/", (req, res, next) => {
	return userController.create(req, res, next);
});

router.delete("/:id", (req, res, next) => {
	return userController.delete(req, res, next);
});

export const usersRouter = router;
