// import { configDotenv } from "dotenv";
import "dotenv/config";
import express from "express";
import { connectMongoose } from "./src/conexao/conexao.js";
import { publicRouter } from "./src/routers/publicRouter.js";
import { authenticatedRouter } from "./src/routers/authenticatedRouter.js";
import { authenticatedAndPrivateRouter } from "./src/routers/authenticatedAndPrivateRouter.js";
import { autenticarRota } from "./src/middlewares/autenticated.js";

import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use("/", publicRouter);
app.use("/autenticada", autenticarRota, authenticatedRouter);
app.use("/autenticada/privada", autenticarRota, authenticatedAndPrivateRouter);

app.listen(port, () => console.log(`[Servidor - index.js] Servidor rodando na porta ${port}`));

connectMongoose();

/*
importei o middleware aqui no index.js
*/
