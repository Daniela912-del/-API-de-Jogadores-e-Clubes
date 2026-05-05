import { PlayerModel } from "../models/playerModel";
import { StatisticsModel } from "../models/statisticsModel";
import * as playersRepository from "../repositories/playersRepository";
import * as statusCode from "../utils/httpHelper";

export const getPlayer = async () => {
    const data = await playersRepository.findAllPlayers();
    let response = null;

    if (data) {
        response = statusCode.ok(data);
    } else {
        response = statusCode.noContent();
    }

    return response;
}

export const getPlayerById = async (id: number) => {
    const data = await playersRepository.findPlayerById(id);
    let response = null;

    if (data) {
        response = await statusCode.ok(data);
    } else {
        response = statusCode.noContent();
    }

    return response;
}

export const postPlayerService = async (player: PlayerModel) => {
    let response = null;

    if (Object.keys(player).length !== 0) {
        await playersRepository.insertPlayer(player);
        response = await statusCode.created();
    } else {
        response = statusCode.badRequest();
    }
    return response
}

export const deletePlayerService = async (id: number) => {
    const isDeleted = await playersRepository.deletePlayerByID(id);

    if (isDeleted) {
        return await statusCode.ok({ message: "Player deleted" });
    } else {
        return await statusCode.badRequest();
    }
}

export const updatePlayerService = async (id: number, statistics: StatisticsModel) => {
    const data = await playersRepository.updatePlayerByID(id, statistics);
    let response = null;

    if (data) {
        response = await statusCode.ok(data);
    } else {
        response = statusCode.noContent();
    }
    return response;
}