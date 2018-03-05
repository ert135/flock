//import typescirpt types. 
///<reference path='../p5-global-mode.d.ts'/>

//import modules
// import Tree from "./tree";
// import imageProcessor from "./imageProcessor";

//extend existing window property, we have to put the draw and setup functinos of the global window object for p5 to work in global mode
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


let preload = function() {

}

let setup = function() {

}

let draw = function() {

}

let mouseClicked = function() {

}

window.preload = preload;
window.setup = setup;
window.draw = draw;
window.mouseClicked = mouseClicked;
