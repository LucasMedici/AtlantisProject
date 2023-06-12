import express from "express"

import {createCliente, deleteCliente, getAllClientes, getClienteById, updateCliente} from "./controller/ClienteController"


export const router = express.Router();


router.post("/cliente", createCliente)
router.delete("/cliente/:id",deleteCliente)
router.get("/clientes", getAllClientes)
router.get("/cliente/:id",getClienteById)
router.put("/cliente/:id", updateCliente)