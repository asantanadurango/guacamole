const createUserController = (req, res) => {
  console.log(req.body);
  res.json({ message: "usuario creado", user: req.body });
};

export { createUserController };
