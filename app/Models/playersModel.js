


export class Player {


    constructor(name){
        this.name = name

        this.score = 0
    }

    get HTMLTemplate(){
        return `<p class="text-center">${this.name} Score: <button class="btn btn-danger">Minus</button> ${this.score} <button class="btn btn-success">Plus</button></p>`
    }
}