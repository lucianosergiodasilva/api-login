import { Usuarios } from "../models/usersModel.js";

export const getUsers = async (req, res) => {
  try {
    const usuarios = await Usuarios.find();
    if (!usuarios) {
      res.status(404).json({ mensagem: "Não há usuários cadastrados!" });
      return;
    }
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(404).json({ mensagem: "Não foi possivel encontrar usuários!" });
    return;
  }
};
