
// index
import express from 'express';
const indexRoute = express.Router();
import {indexController} from'../controllers/index.js'
indexRoute.get('/', indexController);

// Control
import { controlRoute } from './control/controlRoute.js';


// Products
import { productsRouter } from './products/productsRouter.js';

// Users
import { usersRouter } from './users/usersRouter.js';

export {
    indexRoute,
    controlRoute, 
    productsRouter,
    usersRouter
}