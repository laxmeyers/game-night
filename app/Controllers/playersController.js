import { appState } from "../AppState.js";
import { playersService } from "../Services/playersServices.js";
import { getFormData } from "../Utils/FormHandler.js";




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
        const form = window.event.target

        let playerData = getFormData(form)
        playersService.createPlayer(playerData)
        this.drawPlayers()
    }

    playerScoreUp(name){
        playersService.playerScoreUp(name)
        this.drawPlayers()
    }

    playerScoreDown(name){
        playersService.playerScoreDown(name)
        this.drawPlayers()
    }

    constructor(){
        this.drawPlayers()
    }
 }