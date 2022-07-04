class Tire{
  constructor(posX, posY, width, height){
    this.x = posX || 0;
    this.y = posY || 0;
    this.w = width || 5;
    this.h = height || 8;
    this.rotation = 0; //[-1, 1]
  }

  draw(ctx){
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(0.4*this.rotation)

    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillRect(-this.w/2, -this.h/2, this.w, this.h);

    ctx.restore();
  }

  setRot(rotation){
    if(rotation > 1){
      this.rotation = 1;
      return
    }

    if(rotation < -1){
      this.rotation = -1;
      return
    }

    this.rotation = rotation;
    return
  }
}
