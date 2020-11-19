
var database

var form , game , player
var playerCount = 0;
var gameState = 0 ;

var allPlayers

var cars
var car1,car2,car3,car4
var car1i,car2i,car3i,car4i
var track
var ground

function preload(){
  car1i = loadImage("car1.png")
  car2i = loadImage("car2.png")
  car3i = loadImage("car3.png")
  car4i = loadImage("car4.png")

  track = loadImage("track.jpg")

  ground = loadImage("ground.png")
}

function setup() {
  
  createCanvas(displayWidth,displayHeight);
  database = firebase.database();
game = new GameClass()
game.getState();
game.start()



}

function draw() {
  background(225); 

  if(playerCount === 4){
    game.update(1)
    //console.log(gameState)
  }

  if(gameState === 1){
    game.play()
  }
  if(gameState === 2){
    game.end();
  }
  
  
}



