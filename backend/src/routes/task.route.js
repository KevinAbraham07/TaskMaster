import express from "express";
import {
  deleteAllTasks,
  show,
  submit,
} from "../controllers/task.controller.js";
const router = express.Router();

router.post("/submit", submit);
router.get("/show", show);
router.post("/delete-all", deleteAllTasks);
export default router;
