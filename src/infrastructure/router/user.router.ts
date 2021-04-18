import { Router } from "express";
import { UserController } from "../../adapter/controller/user.controller";
import { UserRepository } from "../../adapter/repository/user.repository";
import { UserInteractor } from "../../usecase/user.interactor";

const router = Router();
const userController = new UserController(
  new UserInteractor(new UserRepository())
);

router.get("/", (req, res) => {
  const json = userController.index();
  res.json(json);
});

router.get("/:id", (req, res) => {
  const data = userController.show(1);
  res.json(data);
});

router.post("/", (req, res) => {
  const data = userController.create({
    id: 2,
    name: "test2",
    email: "test2@gmail.com"
  });
  res.json(data);
});

router.delete("/:id", (req, res) => {
  const data = userController.delete(1);
  res.json(data);
});

export const usersRouter = router;
