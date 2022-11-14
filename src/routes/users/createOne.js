import express from "express";
const createOne = express.Router();
import { createUserController } from "../../controllers/users/createUserController.js";

createOne.post("/create", createUserController);

export { createOne };
