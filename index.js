import express from "express";
import { conexao } from "./src/db.js";
import { Usuarios } from "./src/db.js";

const app = express();
const port = 3000;

app.use(express.json());

conexao();

app.get("/", (req, res) => {
  res.json({ mensagem: "Página inicial" });
});

app.get("/usuarios", async (req, res) => {
  const usuarios = await Usuarios.find();
  res.json(usuarios);
});

app.get("/usuarios/:id", async (req, res) => {
  const usuario = await Usuarios.findById(req.params.id);
  res.json(usuario);
});

app.post("/usuarios/", async (req, res) => {
  const { nome, senha, email, celular } = req.body;
  const novoUsuario = await Usuarios.create({ nome, senha, email, celular });
  res.json(novoUsuario);
});

app.delete("/usuarios/:id", async (req, res) => {
  const usuario = await Usuarios.findByIdAndDelete(req.params.id);
  res.json(usuario);
});

app.put("/usuarios/:id", async (req, res) => {
  const { nome, senha, email, celular } = req.body;
  const usuario = await Usuarios.findByIdAndUpdate(req.params.id, { nome, senha, email, celular });
  res.json(usuario);
});

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
