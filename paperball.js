class Ball{
 constructor(){
var options={
    isStatic:false,
restitution:0.3,
friction:0.5,
density:1.2
}
this.body=Matter.Bodies.circle(100,650,70,options);
World.add(world,this.body);
this.radius=70;
this.image=loadImage("paper.png");
this.image.scale=0.5
}
display(){
fill("purple");
 var p=this.body.position;
imageMode(CENTER)
image(this.image,p.x,p.y,this.radius*2);




}





 }










