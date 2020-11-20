class Paper{
    constructor(x,y,r){
        
        var options_object = {
            'isStatic':false,
            'restitution':0.3,
            'friction':0,
            'density':1.2
        }
    this.x = x;
    this.y =y;
    this.r = r;
    this.image = loadImage("paper.png");
    this.body = Bodies.circle(this.x,this.y,(this.r-20)/2,options_object);
    
    World.add(world,this.body) ;
    }
    display(){
     var pos =this.body.position;   
     push();
     translate(pos.x,pos.y);
     rectMode(CENTER);
     //strokeWeight(3);
    fill(255);
    imageMode(CENTER);
   ellipse(0,0,this.r, this.r);
    
    image(this.image, 0, 0,70,70);
    console.log(image);
    
    pop();


    }
    
    }