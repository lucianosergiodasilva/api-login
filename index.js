// import { configDotenv } from "dotenv";
import "dotenv/config";

import express from "express";
import { connectMongoose } from "./src/conexao/conexao.js";
import { publicRouter } from "./src/routers/publicRouter.js";
import { authenticatedRouter } from "./src/routers/authenticatedRouter.js";
import { authenticatedAndPrivateRouter } from "./src/routers/authenticatedAndPrivateRouter.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/", publicRouter);
app.use("/", authenticatedRouter);
app.use("/", authenticatedAndPrivateRouter);

app.listen(port, () => console.log(`[Servidor - index.js] Servidor rodando na porta ${port}`));

connectMongoose();
