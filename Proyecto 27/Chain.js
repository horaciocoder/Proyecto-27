class Chain {
    constructor(BodyA, BodyB, Stifness, Length) {
        var options = {
            bodyA: BodyA,
            bodyB: BodyB,
            stiffness: Stifness,
            length: Length
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    display() {
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(4);
        stroke("black");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}