import {
  generateAcessToken,
  generateRefreshToken,
  setTokeninCookies,
} from "../../common/utils/jwt.js";
import User from "./auth.model.js";
const register = async (req, res) => {
  const { email, password, name } = req.body;

  const isExist = await User.findOne({ email: email });
  if (isExist) {
    return res.status(409).json({
      message: "User already Exist",
    });
  }
  const user = await User.create({ email, password, name });

  if (!user) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }

  res.status(201).json({
    message: "Account Creation Sucessfull",
    Data: user,
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email }).select("+password");

  if (!user) {
    res.status(404).json({
      message: "User not Found ",
    });
  }
  //compare the password
  if (user.password != password) {
    return res.status(401).json({
      message: "unauthorized acess",
    });
  }

  const acessToken = await generateAcessToken({
    email: user.email,
    id: user._id,
  });
  const refreshToken = await generateRefreshToken({
    id: user._id,
  });
  user.refreshToken = refreshToken;
  await user.save();
  setTokeninCookies(res, acessToken, refreshToken);

  res.status(200).json({
    message: "Login successful",
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  });
};
export { register, login };
