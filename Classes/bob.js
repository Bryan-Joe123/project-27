class bob{
    constructor(x,y,height,mode){
        var box_option={
            restitution:1.2,
            friction:1.0,
            density:1
        }
        this.body=Bodies.circle(x,y,height,box_option);
        World.add(world,this.body);
        this.h=height;
        this.pos = this.body.position;
        console.log(this.pos);
        this.mode=mode
    }
    display(){
        if(keyWentDown("up_arrow")&&this.mode=="main"){
            Matter.Body.applyForce(this.body,this.pos,{x:-400,y:0})
        }
        fill(rgb(250, 94, 55));
        rectMode(CENTER);
        strokeWeight(2);
        ellipse(this.pos.x,this.pos.y,this.h*2);
    }
}