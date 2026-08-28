import mongoose from "mongoose";

// const DB_URL = process.env.URL_MONGODB;
const DB_URL = "mongodb+srv://lucianomirabolant_db_user:r5If6bAZNhIYeRcm@barbearia.qkolx7h.mongodb.net/Barbearia?appName=Barbearia";

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
