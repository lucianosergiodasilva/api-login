import express, { Router } from "express";
import { getUsers } from "../controllers/usersController.js";
import { getAdmin } from "../controllers/authenticatedAndPrivateController.js";

export const authenticatedAndPrivateRouter = Router();

authenticatedAndPrivateRouter.get("/teste", getAdmin);
authenticatedAndPrivateRouter.get("/usuarios", getUsers);
