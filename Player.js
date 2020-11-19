class Player{

    constructor(){

this.distance =0
this.name = null
this.index = null
this.rank = 0
    }

    getCount(){
      var countRef =database.ref('playerCount')
      countRef.on("value",function (data){
          playerCount = data.val()
      })
    }

    updateCount(count){
        database.ref('/').update({
            playerCount : count
        })
        
    }

    update(){
        var playerIndex = "players/player"+this.index
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
        })
    }

   static getPlayerInfo(){
       var playerInfoRef=  database.ref("players")
       playerInfoRef.on("value",function (data){
           allPlayers = data.val()
       })
    }


    gcae(){
        var gcaeref = database.ref("CarsAtEnd")
        gcaeref.on("value",function (data){
            this.rank=data.val();
        })
    }

    static upgcae(rank){
        database.ref('/').update({
            CarsAtEnd:rank
        })
    }
    


}