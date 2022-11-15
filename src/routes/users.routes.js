import express from 'express';
const route = express.Router();
const UserRouter = express.Router();
import {register, users} from '../controllers/users.controllers.js'

route.get('/', users);
route.post('/register', register);

UserRouter.use('/api/users', route)
export {
    UserRouter
};