import express from 'express';
import { createOne } from './createOne.js';
const productsRouter = express();
productsRouter.use('/api/products/', createOne);


export {
    productsRouter
}