// class Character {
//     constructor(x, y, width, height){
//         this.x = x;
//         this.y = y;
//         this.width = width;
//         this.height = height;
//         this.color = "#000";
//         this.vx = 0;
//         this.vy = 0;
//     }

//     draw(ctx){

//         ctx.fillStyle = this.color;
//         ctx.fillRect (this.x, this.y, this.width, this.height);
//     }
// }


class Character {
    constructor(x,y,width,height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.gravity=.5;
      this.velocity=1;

    }
    draw(ctx) {
    ctx.fillStyle = '#ff0000';
    ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    moveLeft(){
        console.log()
        if(keys.A){
            console.log(this.x,this.width,this.x-this.width)
            if(this.x<-this.width){
                this.x=canvas.width-this.width;
            }else{
                this.x=this.x-2
            }
        }
    }
    moveRight(){
        if(keys.D){
            if(this.x>=canvas.width){
                this.x=0;
            }else{
                this.x=this.x+2
            }        }
    }

    fall(){
        // this.y+=0.5

        this.velocity += this.gravity;
        this.y += this.velocity;
    }

    jump(){}
 }