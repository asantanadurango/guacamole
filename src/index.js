import express from "express";
import dotenv from "dotenv";
dotenv.config();
const { PORT = 3000 } = process.env;
import { connection } from "./db/dbConecction.js";
import * as url from "url";
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const app = express();

connection()
  .then(() => console.log("conectado a la db", path.join(__dirname, "public")))
  .catch((err) => console.log(err));
import {
  indexRoute,
  controlRoute,
  productsRouter,
  usersRouter,
} from "./routes/index.js";
import path from "path";

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(indexRoute);
app.use(controlRoute);
app.use(productsRouter);
app.use(usersRouter);

app.listen(PORT, () => {
  console.clear();
  console.log("server on port", PORT);
});
