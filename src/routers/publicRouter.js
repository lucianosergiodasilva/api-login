import express, { Router } from "express";
import { getRoot, getUsers, getUsersById, createUser, deleteUserById, updateUserById } from "../controllers/usersController.js";

export const publicRouter = Router();

publicRouter.get("/", getRoot);
publicRouter.get("/usuarios", getUsers);
publicRouter.get("/usuarios/:id", getUsersById);
publicRouter.post("/usuarios/", createUser);
publicRouter.delete("/usuarios/:id", deleteUserById);
publicRouter.put("/usuarios/:id", updateUserById);
