class Platform {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      
      this.height = 15;
      this.width = 100;
    }
    
    draw() {
      ctx.fillStyle = '#000000';
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }