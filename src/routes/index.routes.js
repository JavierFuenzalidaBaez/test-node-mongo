import { Router } from "express";
import {
  listTasksController,
  createTaskController,
  goEditTaskController,
  editTaskController,
  deleteTaskController,
  changeStatusTaskController,
} from "../controllers/tasks.controller";

const router = Router();

router.get("/", listTasksController);

router.post("/tasks/add", createTaskController);

router.get("/edit/:id", goEditTaskController);

router.post("/edit/:id", editTaskController);

router.get("/delete/:id", deleteTaskController);

router.get("/done/:id", changeStatusTaskController);

export default router;
