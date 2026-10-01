import { Usuarios } from "../models/usersModel.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  const { nome, senha, email, celular, papel } = req.body;
  try {
    if (!nome || !senha || !email || !celular || !papel) {
      res.status(400).json({ mensagem: "Faltou preencher alguma informação!" });
      return;
    }
    const senhaCriptografada = await bcrypt.hash(req.body.senha, 10);
    const novoUsuario = await Usuarios.create({ nome, senha: senhaCriptografada, email, celular, papel });

    res.status(201).json({ mensagem: "Usuário criado com sucesso!" });
  } catch (error) {
    res.status(404).json({ mensagem: "Não foi possivel criar usuário!" });
    return;
  }
};
