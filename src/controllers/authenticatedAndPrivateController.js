import { Usuarios } from "../models/usersModel.js";

export const getUsersById = async (req, res) => {
  try {
    const usuario = await Usuarios.findById(req.params.id);
    if (!usuario) {
      res.status(404).json({ mensagem: "[getUsersById > try] Não foi possivel encontrar o usuário" });
      return;
    }
    res.status(200).json(usuario);
  } catch (error) {
    res.status(404).json({ mensagem: "[getUsersById > catch] Não foi possivel encontrar o usuário" });
    return;
  }
};

export const deleteUserById = async (req, res) => {
  try {
    const usuario = await Usuarios.findByIdAndDelete(req.params.id);
    if (!usuario) {
      res.status(404).json({ mensagem: "Este usuário já foi excluído." });
      return;
    }
    res.status(204).json({ mensagem: "Usuário excluido com sucesso!" });
  } catch (error) {
    res.status(404).json({ mensagem: "Não foi excluir o usuário!" });
    return;
  }
};

export const updateUserById = async (req, res) => {
  try {
    // Verificação se ID existe, antes de atualizar
    const usuarioID = await Usuarios.findById(req.params.id);
    if (!usuarioID) {
      res.status(404).json({ mensagem: "[updateUserById > try > if] Não foi possivel encontrar o usuário" });
      return;
    }
    // Atualiza dados
    const usuarioAtualizado = await Usuarios.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(usuarioAtualizado);
  } catch (error) {
    res.status(400).json({ mensagem: "[updateUserById > catch] Não foi possivel atualizar o usuário!" });
    return;
  }
};

export const getAdmin = async (req, res) => {
  try {
    if (req.usuario.papel !== "admin") {
      return res.status(403).json({ mensagem: "Acesso negado!" });
    }
    res.status(200).json({ mensagem: `Bem-vindo a rota privada [${req.usuario.nome}]` });
  } catch (error) {
    res.status(404).json({ mensagem: "Não foi possivel encontrar essa rota!" });
    return;
  }
};
