import express from "express";
import v1Router from "./router/v1/v1.routes.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.use("/api", v1Router);

export default app;
