import express, { Router } from "express";
import { getUsers } from "../controllers/usersController.js";
// import { autenticarRota } from "../middlewares/autenticated.js";
import { getTeste } from "../controllers/authenticatedController.js";

export const authenticatedRouter = Router();

authenticatedRouter.get("/teste", getTeste);
authenticatedRouter.get("/usuarios", getUsers);
