class Game {
    constructor(){}

    getState(){
       var stateref = database.ref("gameState")
        stateref.on('value',function(data){
            gameState = data.val()
        })
    }

    updateState(state){
        database.ref("/").update({
            gameState : state
        })
    }

    start(){
        player = new Player()
        player.getCount()
        form = new Form()
        form.display()
    }
}