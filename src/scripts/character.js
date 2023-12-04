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
      this.pause=false;

      this.touchedPlatform=false;

    }
    draw(ctx) {
        ctx.fillStyle = '#ff0000';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    moveLeft(){
        if(keys.A){
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
        if(!this.pause){
            this.touchedPlatform=false;
            console.log("inside fall");
            this.velocity += this.gravity;
            this.y += this.velocity;
        }
    }

    stop(){
        this.pause=true;
    }

    resume(){
        this.pause=false;
    }

    dead(){
        if(this.y>=canvas.height){
            ctx.font = "30px Arial";
            ctx.fillText("Game Over!", canvas.width/2, canvas.height/2);
            ctx.fillRect(this.x, this.y, this.width, this.height);
            IS_GAME_OVER=true;
        }
    }

    jump(){
        if(keys.SPACE){
            console.log("here",this.pause)
            // if(this.pause){
                //     this.pause=false;
                //     this.fall()
                // }
                this.resume()
                console.log("here",this.pause)
            // this.pause=false;
            this.velocity -= this.jumpForce;
            keys.SPACE=false;
        }
    }


    update(platforms){
        const x=Math.round(this.x)
        const y=x+this.width;
     
        const a=Math.round(this.y)
        const b=a+this.height;
       
        const overlappingPlatform=platforms.find(el=>{
            const p=Math.round(el.x)
            const q=p+el.width;

            const c=Math.round(el.y)

            const isHorizontalDirectionMatch=(p<=x && x<=q) || (p<=y && y<=q)
            const isVerticalDirectionMatch= c<=b;
            return (isHorizontalDirectionMatch && isVerticalDirectionMatch);
        })
        if(overlappingPlatform && !this.touchedPlatform) {
            console.log('i am here.')
            this.stop()
            this.touchedPlatform=true;
            return;
        }
    }
 }




//  
