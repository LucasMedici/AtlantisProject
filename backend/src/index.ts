import express, { json } from "express";
import {router} from "./routes"

import db from "./database/config";
import cors from 'cors';

const app = express();


app.use(cors({
  methods: "GET,OPTIONS,PUT,POST,DELETE",
  origin: "*"
}))
app.use(json());
app.use(router)





app.listen(3000, async () => {
  await db.sync();
  console.log(`App running!`);
});
