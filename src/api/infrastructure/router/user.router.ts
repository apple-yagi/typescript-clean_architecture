import { Router } from "express";
import { UserController } from "../../adapter/controller/user.controller";
import { UserInteractor } from "../../usecase/user.interactor";
import { UserRepository } from "../inmemory/user.repository";

const router = Router();
const userController = new UserController(
  new UserInteractor(new UserRepository())
);

router.get("/", (req, res) => {
  const json = userController.index();
  res.json(json);
});

router.get("/:id", (req, res) => {
  const data = userController.show(req);
  res.json(data);
});

router.post("/", (req, res) => {
  const data = userController.create(req);
  res.json(data);
});

router.delete("/:id", (req, res) => {
  const data = userController.delete(req);
  res.json(data);
});

export const usersRouter = router;
