class Drop{
    constructor(x,y){
        var options = {
            friction: 0.01
        }

        this.body = Bodies.circle(x,y,5,options);
        this.radius = 5;

        World.add(world, this.body)
    }

    update(){
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body,{x: random(100, 400), y: random(100, 400)});
        }
    }

    display(){
        fill("blue");

        ellipseMode(CENTER);

        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);

    }
}