class roof{
    constructor(x,y){
        var option={
            isStatic:true,
        }
        this.body=Bodies.rectangle(x,y,500,40,option);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        
        fill(rgb(250, 94, 55));
        rectMode(CENTER);
        strokeWeight(2);
        rect(pos.x,pos.y,500,40);
    }
}