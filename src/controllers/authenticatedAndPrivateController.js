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
