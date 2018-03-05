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

let setup = function() {
    const canvas = createCanvas(800, 800);
    canvas.parent(document.getElementById('canvas-target'));
}

let draw = function() {

}

let mouseClicked = function() {

}

window.setup = setup;
window.draw = draw;
window.mouseClicked = mouseClicked;
