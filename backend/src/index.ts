import express, { json } from "express";

import db from "./database/config";
import cors from 'cors';

const app = express();


app.use(cors({
  methods: "GET,OPTIONS,PUT,POST,DELETE",
  origin: "*"
}))
app.use(json());





app.listen(async () => {
  await db.sync();
  console.log(`App running!`);
});
