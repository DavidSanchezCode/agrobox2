import { Router } from 'express';
import {get_registers, crear_usuario } from"../controllers/register_controller.js";
const router = Router();

//const AuthController = require('../controllers/Authcontroller.js');

router.get("/register_users", get_registers);
router.post("/register_users", crear_usuario);
router.put("/register_users/:id");
router.delete("/register_user/:ids");

export default router;

