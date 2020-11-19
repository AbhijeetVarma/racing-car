class GameClass{

constructor(){

}

getState(){
    var getStateref = database.ref('GameState')
   
    getStateref.on("value",function (data){
        gameState = data.val()
        

    })
    console.log(getStateref)
}

update(state){

    database.ref('/').update({
        GameState:state
    })
    //console.log(gameState)
}

async start(){
    if(gameState === 0){
        
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value")
        if(playerCountRef.exists()){
        playerCount=playerCountRef.val();

        player.getCount();
    }
        form = new Form();
        form.display();


    
    }
    car1=createSprite(100,200,100,200)
    car1.addImage(car1i)
    car2=createSprite(300,200,100,200)
    car2.addImage(car2i)
    car3=createSprite(500,200,100,200)
    car3.addImage(car3i)
    car4=createSprite(700,200,100,200)
    car4.addImage(car4i)

    cars =[car1,car2,car3,car4]
}

play(){
  form.hide()

  Player.getPlayerInfo()
  player.gcae()


  if(allPlayers !== undefined){
     background(ground)
     image(track,0,-(displayHeight*4),displayWidth,displayHeight*5)
     var index = 0
     var x=200
     var y
     for(var plr in allPlayers){
         index=index+1
         x=x+250
         y=displayHeight-allPlayers[plr].distance
         cars[index-1].x=x
         cars[index-1].y=y

      
       if(index ===  player.index){
        fill("orange") 
        strokeWeight(10)
        ellipse(x,y,50,50)
         camera.position.x=displayWidth/2
         camera.position.y=cars[index-1].y

         
       }
       
     }

  }

  if(keyIsDown(UP_ARROW) && player.index!== null){
      player.distance+= 50
      player.update();      
  }


  if(player.distance>4150){
      gameState = 2
      player.rank = player.rank+1
      Player.upgcae(player.rank);
  }

                            

drawSprites();



}

end(){
    console.log(player.rank)    
    background(ground)
     image(track,0,-(displayHeight*4),displayWidth,displayHeight*5)
    drawSprites();
    
}





}
