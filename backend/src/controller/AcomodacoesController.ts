import { RequestHandler } from "express";

import { AcomodacoesModel  } from "../database/models/model";


export const getAllAcomodacoes: RequestHandler = async (req, res) => {
    try {
        const all_acomod = await AcomodacoesModel.findAll();
        if (all_acomod != null) {
            return res.status(200).json({message: "Acomodações Registrados: ", data:all_acomod})
        } else {
            return res.status(400).json({message: "Nenhuma Acomodação Registrada!: "})
        }
       
    } catch {
        return res.status(400).json({message: "Falha ao carregar Acomodações!"})
    }
}