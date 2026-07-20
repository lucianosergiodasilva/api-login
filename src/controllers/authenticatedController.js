export const getTeste = async (req, res) => {
  try {
    res.status(200).json({ mensagem: "Bem-vindo à rota Autenticada!" });
  } catch (error) {
    res.status(404).json({ mensagem: "Não foi possivel encontrar essa rota!" });
    return;
  }
};
