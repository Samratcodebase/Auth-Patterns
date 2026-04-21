import express from "express";
const app = express();

app.use(express.urlencoded());

app.use("/api");

export default app;
