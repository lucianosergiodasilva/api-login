import express, { Router } from "express";
import { getUsersById, deleteUserById, updateUserById } from "../controllers/authenticatedAndPrivateController.js";

// import { getAdmin } from "../controllers/authenticatedAndPrivateController.js";

export const authenticatedAndPrivateRouter = Router();

// authenticatedAndPrivateRouter.get("/teste", getAdmin);

authenticatedAndPrivateRouter.get("/usuario/:id", getUsersById);
authenticatedAndPrivateRouter.delete("/usuario/:id", deleteUserById);
authenticatedAndPrivateRouter.put("/usuario/:id", updateUserById);
