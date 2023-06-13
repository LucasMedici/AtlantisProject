import express from "express"

import {createCliente, deleteCliente, getAllClientes, getClienteById, updateCliente} from "./controller/ClienteController"
import { createDependente, deleteDependente, getAllDependentes, getDependenteById, updateDependente } from "./controller/DependenteController";

export const router = express.Router();


router.post("/cliente", createCliente)
router.delete("/cliente/:id",deleteCliente)
router.get("/clientes", getAllClientes)
router.get("/cliente/:id",getClienteById)
router.put("/cliente/:id", updateCliente)



router.post("/dependente", createDependente)
router.delete("/dependente/:id",deleteDependente)
router.get("/dependentes", getAllDependentes)
router.get("/dependente/:id",getDependenteById)
router.put("/dependente/:id", updateDependente)