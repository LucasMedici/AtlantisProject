import { RequestHandler } from "express";

import { AcomodacoesModel } from "../database/models/model";




export const createAcomodacoes: RequestHandler = async (req, res) => {
    try {
        // await AcomodacoesModel.create(1,"CasalSimples",0,1,1,1,1)
        // await AcomodacoesModel.create(2, "FamiliaSimples",2,1,1,1,1);
        // await AcomodacoesModel.create(3, "FamiliaMias",5,1,2,1,1);
        // await AcomodacoesModel.create(4, "FamiliaSuper",6,2,3,1,2);
        // await AcomodacoesModel.create(5, "SolteiroSimples",1,0,1,1,0);
        // await AcomodacoesModel.create(6, "SolteiroMais",0,1,1,1,1);
        return res.status(200).json({message: "Acomodações registradas com sucesso! "})
    } catch {
        return res.status(400).json({message: "Erro ao registrar acomodações!"})
    }
}