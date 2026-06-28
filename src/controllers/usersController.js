import { Usuarios } from "../models/usersModel.js";

export const getRoot = (req, res) => {
  res.json({ mensagem: "Página inicial" });
};

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

export const getUsersById = async (req, res) => {
  try {
    const usuario = await Usuarios.findById(req.params.id);
    if (!usuario) {
      res.status(404).json({ mensagem: "Não foi possivel encontrar o usuário" });
      return;
    }
    res.status(200).json(usuario);
  } catch (error) {
    res.status(404).json({ mensagem: "Não foi possivel encontrar o usuário" });
    return;
  }
};

export const createUser = async (req, res) => {
  const { nome, senha, email, celular } = req.body;
  try {
    if (!nome || !senha || !email || !celular) {
      res.status(400).json({ mensagem: "Faltou preencher alguma informação!" });
      return;
    }
    const novoUsuario = await Usuarios.create({ nome, senha, email, celular });
    res.status(201).json({ mensagem: "Usuário criado com sucesso!" });
  } catch (error) {
    res.status(404).json({ mensagem: "Não foi possivel criar usuário!" });
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
      res.status(404).json({ mensagem: "Não foi possivel encontrar o usuário" });
      return;
    }
    // Atualiza dados
    const { nome, senha, email, celular } = req.body;
    const usuario = await Usuarios.findByIdAndUpdate(req.params.id, { nome, senha, email, celular });
    res.status(200).json(usuario);
  } catch (error) {
    res.status(400).json({ mensagem: "Não foi possivel atualizar o usuário!" });
    return;
  }
};
