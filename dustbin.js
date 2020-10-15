class Dustbin{

    constructor(x,y,w,h){
        var options={
            isStatic:true
        }
        
        this.body=Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
        this.width=w;
        this.height=h;
        this.image=loadImage("dustbingreen.png");
    }

display(){
    fill("white");
    var p=this.body.position;
    imageMode(CENTER);
  image(this.image,p.x,p.y-175);
  rectMode(CENTER);
  rect(p.x,p.y,this.width,this.height);
}
}