import { Router } from "express";
import { usersRouter } from "./user.router";
const router = Router();

router.get("/", function (req, res) {
  res.send("Hello World");
});
router.use("/users", usersRouter);

export { router };
