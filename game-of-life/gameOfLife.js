console.log("hi hi :)";

var nine = 9;
var ton = 7;
var hi = nine + ton;

console.log(" " + hi);

class GameOfLife {
  constructor() {
  }

  next(shape) {

  }
}

class Canvas {
  constructor(container) {
    var canvasElement = document.createElement('canvas');
    this.obj = canvasElement;
    this.pixelWidth = 803;
    this.pixelHeight = 506;
    canvasElement.width = this.pixelWidth;
    canvasElement.height = this.pixelHeight

    container.appendchild(canvasElement);

    this.ctx = this.obj.getContext("2d");

    this.setGridSize(11);
  }

  setGridSize(gridSize) {

  }

  draw(cells){
    this.ctx.lineWidth = 1;
    ctx.strokeStyle = "#999";
    for(let e = this.cellSize; e < this.pixelHeight; e += this.cellSize;) {
      this.ctx.beginPath();
      this.ctx.moveTo(x, y);
      this.ctx.lineTo();
      this.ctx.stroke();

      for(let e = this.cellSize; e < this.pixelWidth; e += this.cellSize;) {
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.lineTo();
        this.ctx.stroke();
    }
  }

  click(fn){

  }

  getDimension() {

  }

  getGridSize() {

  }

  setGridSize(gridSize) {

  }
}

class Shape {
  constructor(canvas) {
    this.canvas = canvas;
    this.current = [];
    this.collection = {};
  }

  get(){

  }

  set(shape) {

  }

  copy(shape) {

  }

  redraw() {

  }

  center() {

  }

  offset(dx, dy) {

  }

  toggle(cell) {

  }

}

class controls {
  constructor(canvas, shape, gameoflife) {
    this.canvas = canvas;
    this.shapes = shapes;
    this.gameoflife = gameoflife;
    this.started = false;
    this.timer = null;
    this.generation = 0;
  }

  init(shapes) {

  }

  setGeneration(gen) {

  }

  animate() {

  }

  next() {

  }

}

let canvasElement = document.getElementById('canvas-div');
let canvas = new Canvas(canvasElement);
let shape = new shape(canvas);
let GameOfLife = new GameOfLife();
let controls = new Controls(canvas, shape, gameOfLife););
