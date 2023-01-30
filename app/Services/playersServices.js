import { appState } from "../AppState.js";
import { Player } from "../Models/playersModel.js";



class PlayersService {
    createPlayer(playerData){
        let newPlayer = new Player(playerData.name)
        appState.players.push(newPlayer)
    }
}

export const playersService = new PlayersService()