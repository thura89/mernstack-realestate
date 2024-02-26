import express from "express";
import {
  createResidency,
  getAllResidency,
  getResidency,
} from "../controller/residencyController.js";

const router = express.Router();

router.post("/create", createResidency);
router.get("/allresd", getAllResidency);
router.get("/:id", getResidency);

export { router as residencyRoute };
