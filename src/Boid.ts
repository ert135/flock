///<reference path='../p5.d.ts'/>

export default class Boid {
    private acceleration: p5.Vector;
    private velocity: p5.Vector;
    private location: p5.Vector;
    private maxSpeed: number = 5;
    private maxForce: number = 0.1;
    private target: p5.Vector;
    private radius: number = 5;

    constructor(initialPosition: p5.Vector, initialVolocity: p5.Vector, target: p5.Vector) {
        this.location = initialPosition;
        this.velocity = initialVolocity;
        this.acceleration = new p5.Vector(0,0);
        this.setTarget(target);
    }

    public setTarget(target: p5.Vector): void {
        this.target = target.copy();
    }

    public move(): void {
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxSpeed);
        this.location.add(this.velocity);
        this.acceleration.mult(0);
    }

    private applyForce(force: p5.Vector): void {
        this.acceleration.add(force);
    }

    public seek(target: p5.Vector): void {
        var desired = p5.Vector.sub(this.target, this.location);  // A vector pointing from the location to the target
        // Normalize desired and scale to maximum speed
        desired.normalize();
        desired.mult(this.maxSpeed);
        // Steering = Desired minus Velocity
        var steer = p5.Vector.sub(desired, this.velocity);
        steer.limit(this.maxForce);  // Limit to maximum steering force
        this.applyForce(steer);
    }

    public display() {
        var theta = this.velocity.heading() + radians(90);
        fill(127);
        stroke(200);
        push();
            translate(this.location.x, this.location.y);
            rotate(theta);
            beginShape();
                vertex(0, -this.radius*2);
                vertex(-this.radius, this.radius*2);
                vertex(this.radius, this.radius*2);
            endShape(close);
        pop();
    }
}