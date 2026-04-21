import app from "./src/app.js";
import { connectDB } from "./src/common/DB/index.js";

const main = async () => {
  await connectDB();

  app.listen(3000, () => {
    console.log("server Started on 3000");
  });
};

await main();
