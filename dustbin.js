class Dustbin{
constructor(x,y){
this.image = loadImage("dustbingreen.png");
this.x = x;
this.y = y;

this.DustbinW = 130;
this.DustbinH =130;  
this.DustbinT = 15;
this.angle = 0;
this.baseBody = Bodies.rectangle(this.x,this.y,this.DustbinW,this.DustbinT,{isStatic:true})
this.leftBody = Bodies.rectangle(this.x-this.DustbinW/2,this.y-this.DustbinH/2,this.DustbinT,this.DustbinH,{isStatic:true})
Matter.Body.setAngle(this.leftBody,this.angle);
this.rightBody = Bodies.rectangle(this.x+this.DustbinW/2,this.y-this.DustbinH/2,this.DustbinT,this.DustbinH,{isStatic:true})
Matter.Body.setAngle(this.rightBody,-1*this.angle);

World.add(world,this.baseBody);
World.add(world,this.leftBody);
World.add(world,this.rightBody);
}
display(){
var positionBase=this.baseBody.position
var positionRight=this.rightBody.position
var positionLeft=this.leftBody.position
push();
translate(positionBase.x,positionBase.y);
rectMode(CENTER);
//stroke(3);
angleMode(RADIANS);
fill(255);
imageMode(CENTER);
image(this.image, 0,-this.DustbinH/2,this.DustbinW, this.DustbinH);
//rect(0,0,this.DustbinW,this.DustbinT);
pop();

push();
translate(positionRight.x,positionRight.y);
rectMode(CENTER);
//stroke(3);
angleMode(RADIANS);
fill(255);
rotate(-1*this.angle);
//rect(0,0,this.DustbinT,this.DustbinH);
pop();

push();
translate(positionLeft.x,positionLeft.y);
rectMode(CENTER);
//stroke(3);
angleMode(RADIANS);
fill(255);
rotate(this.angle);
//rect(0,0,this.DustbinT,this.DustbinH);

pop();

}

}