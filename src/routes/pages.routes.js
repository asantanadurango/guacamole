import express from 'express';
const PagesRouter = express.Router();
import {
    index,
    products,
    registerProducts,
    users,
    registerUsers
} from '../controllers/pages.controllers.js'

// INDEX
PagesRouter.get('/', index);

// PRODUCTS
PagesRouter.get('/products', products);
PagesRouter.get('/products/register', registerProducts);

// USERS
PagesRouter.get('/users', users);
PagesRouter.get('/users/register', registerUsers);

export {
    PagesRouter,
}