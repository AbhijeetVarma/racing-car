class Form{
   constructor(){
    this.NameInput = createInput('Nickname')
    this.greeting = createElement('h1')
    this.play = createButton('PLAY WITH FRIENDS')
    this.reset = createButton('RESET')
   }

   hide(){
    this.greeting.hide()
    this.play.hide()
    this.NameInput.hide();
}
   display(){
    var title = createElement('h1')
    title.html("Abhijeet's Car Racing Game And Friends")
    title.position(displayWidth/2-200,100)

    
    this.NameInput.position(displayWidth/2,displayHeight/2)

    
    this.play.position(displayWidth/2,(displayHeight/4)*3)
    this.reset.position(displayWidth-50,50)
    
    this.play.mousePressed( ()=>{
        this.NameInput.hide();
        this.play.hide();
        player.name = this.NameInput.value();
        playerCount = playerCount + 1;
        player.index= playerCount
        player.update()
        player.updateCount(playerCount);
        this.greeting.html("Welcome "+ player.name)
        this.greeting.position(displayWidth/2,displayHeight/2)
    })

    this.reset.mousePressed(()=>{
      player.updateCount(0)
      game.update(0)
      database.ref('players').remove()
      this.play.show
      
    })
        
    
}
    

   
} 