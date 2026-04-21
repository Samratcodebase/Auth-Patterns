import jwt from "jsonwebtoken";
import { ENV } from "./env.js";
export const generateAcessToken = async ({ email, id }) => {
  console.log(ENV.JWT_SECRECT);

  return jwt.sign({ email, id }, ENV.JWT_SECRECT);
};

export const generateRefreshToken = async ({ email, id }) => {
  return jwt.sign({ email, id }, ENV.JWT_SECRECT);
};

export function setTokeninCookies(res, acessToken, refreshToken) {
  res.cookie("acesstoken", acessToken, {
    httpOnly: true, // JS cannot read this — blocks XSS
    secure: true, // process.env.NODE_ENV === "production", // HTTPS only in prod
    sameSite: "strict", // blocks CSRF
    maxAge: 15 * 60 * 1000, // 15 minutes in ms
  });

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in ms
  });
}
