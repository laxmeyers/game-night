import { appState } from "../AppState.js";
import { Player } from "../Models/playersModel.js";




 export class PlayersController {
    drawPlayers(){
        let players = appState.players
        // console.log('drawing players', players)

        let names = ''

        players.forEach(player => names += player.HTMLTemplate)

        document.getElementById('players').innerHTML = names
    }

    createPlayer(){
        window.event.preventDefault()
        
    }

    constructor(){
        this.drawPlayers()
    }
 }