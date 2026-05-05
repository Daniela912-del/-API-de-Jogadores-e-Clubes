import { PlayerModel } from "../models/playerModel";
import { StatisticsModel } from "../models/statisticsModel";

const database: PlayerModel[] = [
    {
        "id": 1,
        "name": "Lionel Messi",
        "club": "Inter Miami",
        "nationality": "Argentina",
        "age": 38,
        "position": "Forward",
        "statistics": {
            "Overall": 91,
            "Pace": 76,
            "Shooting": 92,
            "Passing": 91,
            "Dribbling": 93,
            "Defending": 38,
            "Physical": 65
        }
    },
    {
        "id": 2,
        "name": "Cristiano Ronaldo",
        "club": "Al Nassr",
        "nationality": "Portugal",
        "age": 39,
        "position": "Forward",
        "statistics": {
            "Overall": 90,
            "Pace": 83,
            "Shooting": 93,
            "Passing": 82,
            "Dribbling": 87,
            "Defending": 34,
            "Physical": 77
        }
    },
    {
        "id": 3,
        "name": "Neymar",
        "club": "Santos",
        "nationality": "Brazil",
        "age": 33,
        "position": "Forward",
        "statistics": {
            "Overall": 88,
            "Pace": 86,
            "Shooting": 84,
            "Passing": 86,
            "Dribbling": 93,
            "Defending": 36,
            "Physical": 64
        }
    },
    {
        "id": 4,
        "name": "Kylian Mbappé",
        "club": "Paris Saint-Germain",
        "nationality": "France",
        "age": 25,
        "position": "Forward",
        "statistics": {
            "Overall": 93,
            "Pace": 98,
            "Shooting": 91,
            "Passing": 82,
            "Dribbling": 93,
            "Defending": 38,
            "Physical": 80
        }
    },
    {
        "id": 5,
        "name": "Erling Haaland",
        "club": "Manchester City",
        "nationality": "Norway",
        "age": 24,
        "position": "Forward",
        "statistics": {
            "Overall": 92,
            "Pace": 90,
            "Shooting": 95,
            "Passing": 75,
            "Dribbling": 80,
            "Defending": 45,
            "Physical": 89
        }
    },
    {
        "id": 6,
        "name": "Vinícius Júnior",
        "club": "Real Madrid",
        "nationality": "Brazil",
        "age": 24,
        "position": "Forward",
        "statistics": {
            "Overall": 89,
            "Pace": 95,
            "Shooting": 84,
            "Passing": 81,
            "Dribbling": 91,
            "Defending": 29,
            "Physical": 69
        }
    },
    {
        "id": 7,
        "name": "Kevin De Bruyne",
        "club": "Manchester City",
        "nationality": "Belgium",
        "age": 33,
        "position": "Midfielder",
        "statistics": {
            "Overall": 91,
            "Pace": 74,
            "Shooting": 86,
            "Passing": 93,
            "Dribbling": 87,
            "Defending": 64,
            "Physical": 78
        }
    },
    {
        "id": 8,
        "name": "Luka Modrić",
        "club": "Real Madrid",
        "nationality": "Croatia",
        "age": 38,
        "position": "Midfielder",
        "statistics": {
            "Overall": 88,
            "Pace": 72,
            "Shooting": 78,
            "Passing": 89,
            "Dribbling": 88,
            "Defending": 72,
            "Physical": 66
        }
    }
]

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database;
}

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    return database.find((player) => player.id === id);
}

export const insertPlayer = async (player: PlayerModel) => {
    database.push(player);
}

export const deletePlayerByID = async (id: number) => {
    const index = database.findIndex((player) => player.id === id);
    if (index !== -1) {
        database.splice(index, 1);
        return true;
    }
    return false;

}

export const updatePlayerByID = async (id: number, statistics: StatisticsModel): Promise<PlayerModel> => {
    const playerIndex = database.findIndex((player) => player.id === id);

    if (playerIndex !== -1) {
        database[playerIndex].statistics = statistics;
    }

    return database[playerIndex];
}