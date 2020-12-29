class Drops{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.1
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image=loadAnimation("images/source.gif");
        World.add(world, this.body);
      }
      display(){
        var maxDrops=100;
        push();
        for(var i=0;i<maxDrops;i++){
            drops.push(new createDrop(random(0,400),random(0,400)));
        }
        if(this.rain.position.y > height){
          Matter.body.setPosition(this.rain,{x:random(0,400),y:random(0,400)});
        }
        ellipse(200,20,10,10);
        pop();
      }
}