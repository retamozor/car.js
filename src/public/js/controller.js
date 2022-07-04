class Controller{
  constructor(){
    this.up = false;
    this.down = false;
    this.left = false;
    this.right = false;
    this.stop = false;
    this.#addListeners();
  }

  #addListeners(){
    document.onkeydown = e => {
      switch (e.key) {
        case "ArrowLeft":
          this.left = true;
          break;

        case "ArrowRight":
          this.right = true;
          break;

        case "ArrowUp":
          this.up = true;
          break;

        case "ArrowDown":
          this.down = true;
          break;

        case " ":
          this.stop = true;
          break;


        default:
          break;
      }
    }

    document.onkeyup = e => {
      switch (e.key) {
        case "ArrowLeft":
          this.left = false;
          break;

        case "ArrowRight":
          this.right = false;
          break;

        case "ArrowUp":
          this.up = false;
          break;

        case "ArrowDown":
          this.down = false;
          break;

        case " ":
          this.stop = false;
          break;

        default:
          break;
      }
    }
   
  }
}
