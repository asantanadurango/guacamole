import express from 'express';
const route = express.Router();
const ProductRouter = express.Router();
import {register, products} from '../controllers/products.controllers.js'

route.get('/', products);
route.post('/register', register);

ProductRouter.use('/api/products', route)
export {
    ProductRouter
};