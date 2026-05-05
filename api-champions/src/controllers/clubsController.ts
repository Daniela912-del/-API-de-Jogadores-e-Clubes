import { Request, Response } from "express";
import * as service from "../services/clubsService";


export const getCLubs = async (req: Request, res: Response) => {
    const httpResponse = await service.getClubsService();
    res.status(httpResponse.statusCode).json(httpResponse.body);
}