import { Router } from "express";
import { login, Register } from "../auth/Auth.js";

const route = Router();

route.post("/user/register", Register);
route.post("/user/login",login)

export default route;