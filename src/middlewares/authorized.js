export const authorize = async (req, res, next) => {
  try {
    if (req.usuario.papel !== "admin") {
      return res.status(403).json({ mensagem: "[authorize > try > if] Acesso negado!" });
    }

    next();
  } catch (error) {
    res.status(404).json({ mensagem: "[authorize > catch] Não foi possivel autorizar usuário!" });
    return;
  }
};
