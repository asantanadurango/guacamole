import express from 'express';
const controlRoute = express.Router();
import {loginController, registerController} from '../../controllers/control/control.js'

controlRoute.get('/login', loginController);
controlRoute.get('/register', registerController);
export {controlRoute}