import mongoose from "mongoose";

// Criando os schemas
const userSchema = new mongoose.Schema({
  nome: { type: String },
  senha: { type: String },
  email: { type: String },
  celular: { type: String },
});

// Criando o model
export const Usuarios = mongoose.model("usuarios", userSchema);
