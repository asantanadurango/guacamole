import express from 'express';
import { createOne } from './createOne.js';
const usersRouter = express();
usersRouter.use('/users/', createOne);


export {
    usersRouter
}