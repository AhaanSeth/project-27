class Rope{
    constructor(bodyA, bodyB){
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04,
            lenght:10
        }
    this.rope = Constraint.create(options)
    World.add(world, this.chain)
    }
    display(){
        var pointA = this.rope.bodyA.position
        var pointB = this.rope.bodyB.position
        strokeWeight(4)
        line(pointA.x, pointA.y, pointB.x, pointB.y)
    }
}