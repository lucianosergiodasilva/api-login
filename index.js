import express from "express";
import { connectMongoose } from "./src/conexao/conexao.js";
import { publicRouter } from "./src/routers/publicRouter.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/", publicRouter);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));

connectMongoose();
