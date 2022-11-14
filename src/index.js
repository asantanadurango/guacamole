import express from 'express'
import dotenv from 'dotenv'; dotenv.config()
const { PORT } = process.env
import { connection } from './db/dbConecction.js';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express()

import { PagesRouter } from './routes/pages.routes.js'
import { ProductRouter } from './routes/products.routes.js'

connection()
.then(()=>console.log('conectado a la db'))
.catch(err => console.log(err))

// app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')
app.set('views', './src/views')

app.use(PagesRouter)
app.use(ProductRouter)

app.listen(PORT, () => {
    console.clear();
    console.log('server on port', PORT);
})