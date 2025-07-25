import { Router } from "express";
import { signup, login, google } from "../controllers/auth.controller.js";

const router = Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/google", google);

export default router;
