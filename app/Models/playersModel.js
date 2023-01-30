


export class Player {


    constructor(name){
        this.name = name
        this.score = 0
    }

    get HTMLTemplate(){
        return `<p class="text-center">${this.name} Score: <button class="btn btn-danger" onclick="app.playersController.playerScoreDown('${this.name}')">Minus</button> ${this.score} <button class="btn btn-success" onclick="app.playersController.playerScoreUp('${this.name}')">Plus</button></p>`
    }
}