import { appState } from "../AppState.js";
import { Player } from "../Models/playersModel.js";



class PlayersService {
    createPlayer(playerData){
        let newPlayer = new Player(playerData.name)
        appState.players.push(newPlayer)
    }

    playerScoreUp(name){
        let player = appState.players.find(player => player.name == name)
        player.score++
    }

    playerScoreDown(name){
        let player = appState.players.find(player => player.name == name)
        player.score--
    }
}

export const playersService = new PlayersService()