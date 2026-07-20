import express, { Router } from "express";
import { getUsers } from "../controllers/usersController.js";
import { autenticarRota } from "../middlewares/autenticated.js";
import { getAdmin } from "../controllers/authenticatedAndPrivateController.js";

export const authenticatedAndPrivateRouter = Router();

authenticatedAndPrivateRouter.get("/privada", autenticarRota, getAdmin);
