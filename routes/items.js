import express from "express";
const router = express.Router();
import {
  createItem,
  getItems,
  getItem,
  updateItem,
  deleteItem,
} from "../controllers/items.js";

router.get("/", getItems);

router.get("/:id", getItem);

router.post("/", createItem);

router.put("/:id", updateItem);

router.delete("/:id", deleteItem);

export default router;
