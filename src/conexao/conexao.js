import mongoose from "mongoose";

const DB_URL = process.env.URL_MONGODB;

// Conectar o mongoose com o banco de dados
export async function connectMongoose() {
  try {
    await mongoose.connect(DB_URL);
    console.log("[conexao.js] ✔ Conectado ao banco!");
  } catch (error) {
    console.log("[conexao.js] ⚠ Não conectou ao banco!");
    return;
  }
}
