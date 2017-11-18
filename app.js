var centerX;
var centerY;

var userSelect;// 1=rock 2=paper 3=scissors
var compSelect;
var rockImage;
var paperImage;
var scissorsImage;
var gameState=0;
function setup(){
createCanvas(1000,1000);

centerX = width /2;
centerY = (height /2)-200;
}

function draw(){
  background(29,202,255);
 if(gameState==0||keyCode==13){
showStartScreen();
  }
  else if(gameState==1){
showSelections();
checkResult();
  }

}

function preload(){
   rockImage = loadImage("images/the_rock.png");
   paperImage = loadImage("images/paper.png");
   scissorsImage = loadImage("images/scissor.png");
}


function keyPressed(){
if(keyCode==49){
  userSelect=1;
  compSelect=floor(random(1,4));
  gameState=1;
}

else if(keyCode==50){
  userSelect=2;
  compSelect=floor(random(1,4));
  gameState=1;

}

else if(keyCode==51){
  userSelect=3;
  compSelect=floor(random(1,4));
}




}

function showSelections(){

if(userSelect == 1){
  image(rockImage,centerX-350,centerY);
}

else if (userSelect == 2) {
  image(paperImage,centerX-350,centerY);
}
else if (userSelect == 3) {
  image(scissorsImage,centerX-350,centerY);
}


  if(compSelect == 1){
  image(rockImage,centerX-50,centerY);
  }
  else if (compSelect == 2) {
  image(paperImage,centerX-50,centerY);
  }
  else if (compSelect == 3) {
    image(scissorsImage,centerX-50,centerY);
  }
}

function checkResult() {
	if (userSelect) {
		if (userSelect == compSelect) {
      textSize(50);
			text("Issa draw!", centerX - 100, centerY - 100);
		} else if ( (userSelect == 1 && compSelect == 3) || (userSelect == 2 &&
		compSelect == 1) || (userSelect == 3 && compSelect == 2) ) {
      textSize(50);
			text("You win!", centerX - 100, centerY - 100)
		} else {
      textSize(50);
			text("You lose!", centerX - 100, centerY - 100)
		}
	}
}

function showStartScreen() {
  background(30,90,255);
  image(rockImage,600,200);
  image(scissorsImage,300,200);
  image(paperImage,100,200);
}
