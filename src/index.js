import express from 'express'
import dotenv from 'dotenv'; dotenv.config()
const { PORT = 3000 } = process.env
import { connection } from './db/dbConecction.js';
const app = express()

connection()
    .then(()=>console.log('conectado a la db'))
    .catch(err => console.log(err))
import {
    indexRoute,
    controlRoute,
    productsRouter

} from './routes/index.js'

app.set('view engine', 'ejs')
app.set('views', './src/views')


app.use(indexRoute)
app.use(controlRoute)
app.use(productsRouter)



app.listen(PORT, () => {
    
    console.clear();
    console.log('server on port', PORT);
})