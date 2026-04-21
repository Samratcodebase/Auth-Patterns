import User from "./auth.model.js";
const register = async (req, res) => {
  const { email, password, name } = req.body;

  const user = await User.create({ email, password, name });

  res.status(201).json({
    message: "userCreated",
  });
};

export { register };
