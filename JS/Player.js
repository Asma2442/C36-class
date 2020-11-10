class Player {
    constructor(){}

    getCount(){
       var stateref = database.ref("playerCount")
        stateref.on('value',function(data){
            playerCount = data.val()
        })
    }

    updateCount(count){
        database.ref("/").update({
            playerCount : count
        })
    }

    updateName(name){
        var playerIndex = "player"+playerCount
        database.ref(playerIndex).set({
            name : name
        }) 
    }
}