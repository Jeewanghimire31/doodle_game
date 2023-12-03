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

    }
    draw(ctx) {
    ctx.fillStyle = '#ff0000';
    ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    moveLeft(){
        console.log()
        if(keys.A){
            this.x=this.x-10
            console.log(this.x)
        }
    }
    moveRight(){
        if(keys.D){
            this.x=this.x+10
        }
    }

    fall(){
        this.y+=2
    }

    jump(){}
 }