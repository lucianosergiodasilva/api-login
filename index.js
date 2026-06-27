import express from "express";
import { conexao } from "./src/db.js";
import { Usuarios } from "./src/db.js";

const app = express();
const port = 3000;

conexao();

app.get("/", (req, res) => {
  res.json({ mensagem: "Página inicial" });
});

app.get("/usuarios", async (req, res) => {
  const usuarios = await Usuarios.find();
  res.json(usuarios);
});

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
