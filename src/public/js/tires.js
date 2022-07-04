class Tires{
  constructor(car){
    this.frontLeft = new Tire(0, 5*car.h/20);
    this.frontRight = new Tire(car.w, 5*car.h/20);
    this.backLeft = new Tire(0, 4*car.h/5);
    this.backRight = new Tire(car.w, 4*car.h/5);
  }

  draw(ctx){
    this.frontLeft.draw(ctx)
    this.frontRight.draw(ctx)
    this.backLeft.draw(ctx)
    this.backRight.draw(ctx)

  }

  setRot(rotation){
    this.frontLeft.setRot(rotation);
    this.frontRight.setRot(rotation);
  }


}
