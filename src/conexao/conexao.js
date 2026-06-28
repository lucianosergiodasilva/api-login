import mongoose from "mongoose";

const MONGO_URL = "mongodb+srv://lucianomirabolant_db_user:r5If6bAZNhIYeRcm@barbearia.qkolx7h.mongodb.net/Barbearia?appName=Barbearia";

// Conectar o mongoose com o banco de dados
export async function connectMongoose() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("✔ Conectado ao banco!");
  } catch (error) {
    console.log("⚠ Não conectou ao banco!");
    return;
  }
}
