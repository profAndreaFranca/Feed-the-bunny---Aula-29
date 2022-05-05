class Ground {
  constructor(x,y,w,h){
    this.w = w;
    this.h = h;
    this.body = Bodies.rectangle(x,y,w,h,{isStatic:true})
  }
  display(){
    var pos = this.body.position
    push()
    rectMode(CENTER)
    noStroke()//retira as bordas do retangulo
    fill(148,127,146)
    rect(pos.x, pos.y,this.w,this.h)
    pop()
  }
}