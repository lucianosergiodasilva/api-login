import { Usuarios } from "../models/usersModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const SEGREDO = process.env.SECRET_JWT;

export const login = async (req, res) => {
  try {
    const { senha, email } = req.body;

    // Verifica se os campos estão vazios.
    if (!senha || !email) return res.status(400).json({ mensagem: "Senha ou Email vazio!" });

    // Pega todos os usuários do banco.
    const usuarios = await Usuarios.find();

    // Busca usuário no array "usuarios"
    const usuarioEncontrado = usuarios.find((usuario) => usuario.email === email);

    // Verifica se o usuário não existe.
    if (!usuarioEncontrado) return res.status(401).json({ mensagem: "Usuário ou senha inválidos" });

    // Compara a senha com a certeza que o usuário existe
    const senhaEstaCorreta = await bcrypt.compare(senha, usuarioEncontrado.senha);

    if (senhaEstaCorreta) {
      const token = jwt.sign({ id: usuarioEncontrado.id, papel: usuarioEncontrado.papel, nome: usuarioEncontrado.nome }, SEGREDO, { expiresIn: "1h" });
      return res.status(201).json({ token: token });
    } else {
      return res.status(401).json({ mensagem: "Usuário ou senha inválidos" });
    }
  } catch (error) {
    res.status(404).json({ mensagem: "Não foi possivel fazer o login!" });
    return;
  }
};
