import * as statusCode from "../utils/httpHelper";
import * as clubsRepository from "../repositories/clubsRepository";

export const getClubsService = async () => {
    const data = await clubsRepository.findAllClubs();
    if (data.length !== 0) {
        return statusCode.ok(data);
    }
    else {
        return statusCode.noContent();
    }
}