import { Usuarios } from "../models/usersModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const SEGREDO = process.env.SECRET_JWT;
// export const SEGREDO = "meuSegredo";

export const login = async (req, res) => {
  try {
    const { senha, email } = req.body;
    const usuarios = await Usuarios.find();
    const usuarioEncontrado = await usuarios.find((usuario) => usuario.email === email);
    const senhaEstaCorreta = await bcrypt.compare(senha, usuarioEncontrado.senha);

    if (!senha || !email) {
      res.status(400).json({ mensagem: "Faltou preencher alguma informação!" });
      return;
    }

    if (usuarioEncontrado && senhaEstaCorreta) {
      const token = jwt.sign({ id: usuarioEncontrado.id, papel: usuarioEncontrado.papel, nome: usuarioEncontrado.nome }, SEGREDO, { expiresIn: "1h" });

      res.status(201).json({ token: token });
    } else {
      res.status(401).json({ mensagem: "Usuário ou senha inválidos" });
    }
  } catch (error) {
    res.status(404).json({ mensagem: "Não foi possivel fazer o login!" });
    return;
  }
};
