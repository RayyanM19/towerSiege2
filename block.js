class Block{
    constructor(x,y,width,height){
        var options={
            restitution:0.4,
            friction:0.5
        }
        this.width = width;
        this.height = height;

        this.body = Bodies.rectangle(x,y,this.width,this.height,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        if(this.body.speed < 3){
         push();
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(2);
        stroke("black");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
        }
    else{
         World.remove(world, this.body);
         push();
         this.Visiblity = this.Visiblity-5;
         tint(255,this.Visiblity);
         rect(this.body.position.x, this.body.position.y, 40, 50);
        pop();
        } 
    }
}