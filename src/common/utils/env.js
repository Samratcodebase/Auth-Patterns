import dotenv from "dotenv";
import { z } from "zod";
dotenv.config({ path: "./.env" });

const EnvSchema = z.object({
  PORT: z.string(),
  JWT_SECRECT: z.string(),
});

export const validateEnvSchema = (env) => {
  console.log("Loading Env.......");

  const safeparsed = EnvSchema.safeParse(env);
  if (!safeparsed.success) {
    console.log("Env validation Failed");
    process.exit(1);
  }
  console.log("Injected Env");
  console.log(safeparsed);

  return safeparsed.data;
};

export const ENV = validateEnvSchema(process.env);
