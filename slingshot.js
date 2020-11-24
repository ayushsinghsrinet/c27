class slingshot{
    constructor(bodyA,bodyB){
   var opt={
       bodyA: bodyA,
       bodyB: bodyB,
       stiffness: 0.5,
       length: 20
   }
this.chain=Constraint.create(opt)
World.add(world,this.chain)

    }
display(){
var pointa=this.chain.bodyA.position;
var pointb=this.chain.bodyB.position;


strokeWeight(3)
line(pointa.x,pointa.y,pointb.x,pointb.y)


}

}