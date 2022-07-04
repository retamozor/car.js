class Car{
  constructor(posX, posY, width, height, controller = undefined){
    this.x = posX || 0;
    this.y = posY || 0;
    this.w = width || 20;
    this.h = height || 30;
    this.angle = 0;
    this.rotation = 0;
    this.velocity = 0;
    this.acceleration = 0;
    this.tires = new Tires(this);
    this.controller = controller || new Controller();
  }

  draw(ctx){
    ctx.save()
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);

    ctx.translate(-this.w/2, -this.h/2 - this.h/5);
    this.tires.draw(ctx)
    //body
    ctx.fillStyle = 'rgb(200,100,200)';
    ctx.fillRect(0, 0, this.w, this.h);
    
    ctx.fillStyle = 'rgb(150, 50, 150)';
    ctx.fillRect(0, 2 * this.h/5, this.w, 2*this.h/5);
    ctx.restore()
    
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillRect(this.x,this.y,1,1)
  }

  update(){
    if(!(this.controller.up & this.controller.down)){
      if(this.controller.up){
        this.setAcceleration(this.acceleration + 0.1);
      }else if(this.controller.down){
        this.setAcceleration(this.acceleration - 0.1);
      }else{
        this.setAcceleration(0)
      }
    }

    if (!(this.controller.right & this.controller.left)) {      
      if(this.controller.right){
        this.setRot(this.rotation + 0.04);
      }else if(this.controller.left){
        this.setRot(this.rotation - 0.04);
      }else{
        this.setRot(this.rotation*0.9);
      }
    }

    if(this.controller.stop){
      this.velocity *= 0.97;
    }
    this.setVelocity(this.velocity -this.velocity*0.004 + this.acceleration/20);
    this.angle += (Math.abs(this.velocity) < 1)? 
      this.velocity * this.rotation/20:
      this.getVelocitySign() * this.rotation/20;
    this.x += this.getVelocityX();
    this.y += this.getVelocityY();

    this.tires.setRot(this.rotation);
  }

  setAcceleration(acc){
    if(acc > 1){
      this.acceleration = 1;
      return
    }

    if(acc < -1){
      this.acceleration = -1;
      return
    }

    this.acceleration = acc;
    return
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

  setVelocity(vel){
    if(vel > 7){
      this.velocity = 7;
      return
    }

    if(vel < -3){
      this.velocity = -3;
      return
    }

    this.velocity = vel;
    return
  }

  getVelocityX(){
    return Math.sin(this.angle)*this.velocity;
  }

  getVelocityY() {
    return -Math.cos(this.angle)*this.velocity;
  }

  getVelocitySign(){
    return (this.velocity >= 0)? 1 : -1;
  }

}
