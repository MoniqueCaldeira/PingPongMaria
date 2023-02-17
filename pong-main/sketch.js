var gameState = "menu";

function setup() {
  createCanvas(windowWidth,windowHeight);

  //menu = new Menu;
  play = new Classic_1x1();
}

function draw() {  
  background("#1f0441");
  drawSprites()
  //play.Play();
  //play.Play();

  if(gameState == "play"){
    if(keyDown(RIGHT_ARROW)){
      play.player1.x = play.player1.x + 5;
    }
    if(keyDown(LEFT_ARROW)){
      play.player1.x = play.player1.x - 5;
    }

    if(keyDown("D")){
      play.player2.x = play.player2.x + 5;
    }
    if(keyDown("A")){
      play.player2.x = play.player2.x - 5;
    }
  }
  

  
 

  
}