const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const car = new Car(100, 100);
const btnUp = document.findElementById("up")
const btnDown = document.findElementById("down")
const btnLeft = document.findElementById("left")
const btnRight = document.findElementById("right")

function main() {
  canvas.height = window.innerHeight - 2 * 18;
  canvas.width = window.innerWidth - 2 * 18;

  car.draw(ctx);
  car.update();
  requestAnimationFrame(main);
}

main();
