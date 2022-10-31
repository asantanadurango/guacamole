import express from 'express';
const createOne = express.Router();
import {createProductController} from '../../controllers/products/createProductController.js'

createOne.get('/create', createProductController);

export {
    createOne
}