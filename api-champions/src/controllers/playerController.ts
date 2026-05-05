import { Request, Response } from "express";
import * as service from "../services/playersService";
import { badRequest } from "../utils/httpHelper";
import { StatisticsModel } from "../models/statisticsModel";

export const getPlayer = async (req: Request, res: Response) => {
    const httpResponse = await service.getPlayer();
    res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getPlayerById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const httpResponse = await service.getPlayerById(id);
    res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const postPlayer = async (req: Request, res: Response) => {
    const bodyValue = req.body;
    const httpResponse = await service.postPlayerService(bodyValue);

    if (httpResponse) {
        res.status(httpResponse.statusCode).json(httpResponse.body);
    } else {
        const response = await badRequest();
        res.status(response.statusCode).json(response.body);
    }
};

export const deletePlayer = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const httpResponse = await service.deletePlayerService(id);
    res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const updatePlayer = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const bodyValue: StatisticsModel = req.body;

    const httpResponse = await service.updatePlayerService(id, bodyValue);
    res.status(httpResponse.statusCode).json(httpResponse.body);
};