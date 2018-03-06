///<reference path='../p5-global-mode.d.ts'/>

//import modules
import Boid from "./boid";

declare global {
    interface Window { 
        setup: any;
        draw: any;
        mousePressed: any;
        mouseReleased: any;
        preload: any;
        mouseClicked: any;
    }
}

let boid: Boid;
let target: p5.Vector;
let desired: p5.Vector;
let startPosition: p5.Vector;

let standardVelocity = new p5.Vector(0.1, 0.1)

let setup = function() {
    target = new p5.Vector(400,400);
    startPosition = new p5.Vector(height/2, width/2);
    const canvas = createCanvas(1920, 500);
    canvas.parent(document.getElementById('canvas-target'));
    desired = new p5.Vector(400, 300);
    boid = new Boid(startPosition, standardVelocity, desired);
}

let draw = function() {
    clear();
    ellipse(target.x, target.y, 30, 30);
    boid.seek(target);
    boid.move();
    boid.display();
}

let mouseClicked = function() {
    let newTargetVector = new p5.Vector(mouseX, mouseY);
    boid.setTarget(newTargetVector);
    target.x = mouseX;
    target.y = mouseY;
    console.log('Target is now ', target);
}

window.setup = setup;
window.draw = draw;
window.mouseClicked = mouseClicked;
