import { Router } from "express";
import AuthRouter from "../../modules/auth/auth.route.js";
const router = Router();

router.use("/v1", AuthRouter);
export default router;
