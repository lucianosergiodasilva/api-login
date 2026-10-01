// import { configDotenv } from "dotenv";
import "dotenv/config";
import express from "express";
import { connectMongoose } from "./src/conexao/conexao.js";
import { publicRouter } from "./src/routers/publicRouter.js";
import { authenticatedRouter } from "./src/routers/authenticatedRouter.js";
import { authenticatedAndPrivateRouter } from "./src/routers/authenticatedAndPrivateRouter.js";
import { autenticarRota } from "./src/middlewares/autenticated.js";
import { authorize } from "./src/middlewares/authorized.js";

import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use("/publica", publicRouter);
app.use("/autenticada", autenticarRota, authenticatedRouter);
app.use("/privada", autenticarRota, authorize, authenticatedAndPrivateRouter);

// Mostra um erro 404 personalizado, se digitar uma rota que não exista.
app.use((req, res, next) => {
  res.status(404).json({
    status: "erro",
    codigo: 404,
    mensagem: `A Rota não foi encontrada nesta API.`,
    rota: req.originalUrl,
  });
});

app.listen(port, () => console.log(`[Servidor - index.js] Servidor rodando na porta ${port}`));

connectMongoose();

/*

rotas públicas: (não precisa de autenticação)
_
POST /usuarios
POST /login (página principal)

rotas autenticadas:
_
GET /usuarios

rotas autenticadas e privadas:
_
DELETE /usuario/:id
PUT /usuario/:id
GET /usuario/:id

*/
