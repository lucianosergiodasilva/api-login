import express, { Router } from "express";
import { createUser } from "../controllers/publicController.js";
import { login } from "../controllers/loginController.js";

export const publicRouter = Router();

publicRouter.post("/usuario", createUser);
publicRouter.post("/login", login);
