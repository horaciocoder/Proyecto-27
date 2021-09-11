class Ball { 
    constructor(x, y, radius) {
        var options = {
            restitution: 1,
            isStatic: false,
            density: 1
        }
        this.body = Bodies.circle(x, y, radius / 1.8, options);
        World.add(world,this.body);
        this.radius = radius;
    }
    display() {
        var pos = this.body.position;
        noStroke();
        circle(pos.x, pos.y, this.radius);
    }
} 
