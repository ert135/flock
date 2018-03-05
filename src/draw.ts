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

let setup = function() {
    target = new p5.Vector(400,400);
    const canvas = createCanvas(800, 800);
    canvas.parent(document.getElementById('canvas-target'));
    boid = new Boid();
    desired = new p5.Vector(400, 300);
}

let draw = function() {
    clear();
    ellipse(target.x, target.y, 30, 30);
}

let mouseClicked = function() {
    target.x = mouseX;
    target.y = mouseY;
    console.log('Target is now ', target);
}

window.setup = setup;
window.draw = draw;
window.mouseClicked = mouseClicked;
