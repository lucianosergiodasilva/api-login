import express, { Router } from "express";
import { getUsers } from "../controllers/authenticatedController.js";

export const authenticatedRouter = Router();

authenticatedRouter.get("/usuarios", getUsers);
