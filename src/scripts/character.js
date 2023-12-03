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
      this.gravity=.1;
      this.velocity=0;
      this.jumpForce=9;

    }
    draw(ctx) {
        ctx.fillStyle = '#ff0000';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    moveLeft(){
        if(keys.A){
            console.log(this.x,this.width,this.x-this.width)
            if(this.x<-this.width){
                this.x=canvas.width-this.width;
            }else{
                this.x=this.x-10
            }
        }
    }
    moveRight(){
        if(keys.D){
            if(this.x>=canvas.width){
                this.x=0;
            }else{
                this.x=this.x+10
            }        
        }
    }

    fall(){
        this.velocity += this.gravity;
        this.y += this.velocity;

        
    }

    dead(){
        if(this.y>=canvas.height){
            ctx.font = "30px Arial";
            ctx.fillText("Game Over!", canvas.width/2, canvas.height/2);

            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }

    jump(){
        // console.log({velocity:this.velocity})
        if(keys.SPACE){
            this.velocity -= this.jumpForce;
            keys.SPACE=false;
        }
    }
 }




//  
