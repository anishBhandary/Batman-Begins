class Ground{
  constructor(x, y, width, height, angle) {
      var options = {
        isStatic: true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
     
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      stroke("red");
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      pop();
    }
}