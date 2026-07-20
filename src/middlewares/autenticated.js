import jwt from "jsonwebtoken";
import { SEGREDO } from "../controllers/loginController.js";

export const autenticarRota = async (req, res, next) => {
  try {
    const token = req.headers["authorization"];

    if (!token) return res.status(403).json({ mensagem: "Token não fornecido!" });

    jwt.verify(token, SEGREDO, (err, usuario) => {
      if (err) return res.status(403).json({ mensagem: "Esse token expirou, ou foi modificado." });
      req.usuario = usuario;
      next();
    });
  } catch (error) {
    res.status(404).json({ mensagem: "Não foi possivel autenticar usuário!" });
    return;
  }
};
