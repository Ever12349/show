var can = document.getElementById("cricle");
var winWidth = window.innerWidth;
var winHeight = window.innerHeight;
can.width = winWidth;
can.height = winHeight;
var context = can.getContext("2d");

function random(min,max){
	return Math.random()*(max-min)+min;
}

function littleCricle(){};//小方块

littleCricle.prototype = {
    init:function(){
      this.x= random(0,winWidth);
      this.y= random(0,winHeight);
      this.width = random(5,20);
      this.height = this.width;
      this.redcolor = parseInt(random(0,255));
      this.bluecolor = parseInt(random(0,255));
      this.greencolor = parseInt(random(0,255));
      this.alphaColor = random(0.5,1);
      this.speed = random(0.2,1.5);
      this.xdirection = random(0,1)>0.5?0:1; 
      this.ydirection = random(0,1)>0.5?0:1; 
    },
    draw:function(){
        context.fillStyle = "rgba("+this.redcolor+","+this.greencolor+","+this.bluecolor+","+this.alphaColor+")";
        context.fillRect(this.x,this.y,this.width,this.height);
    },
    move:function(){
        if(this.xdirection == 0) {
	       this.x += this.speed;
	       if(this.x > can.width){
	       	 this.xdirection = 1;
	       }
	    }else{
          this.x -= this.speed;
          if(this.x < 0){
	       	 this.xdirection = 0;
	       }
	    }
	    if(this.ydirection == 0) {
		   this.y += this.speed;
		   if(this.y > can.height){
	       	 this.ydirection = 1
	       }
	    }else{
           this.y -= this.speed;
           if(this.y < 0){
	       	 this.ydirection = 0;
	       }
	    }
     this.draw();
}
}
var squaresArry = [];
function moveObj(){
	context.clearRect(0,0,winWidth,winHeight);
	context.fillStyle ="rgba("+this.redcolor+","+this.yellowcolor+","+this.greencolor+","+this.alphaColor+")";
    context.fillRect(this.x,this.y,this.width,this.height);
    for(var k=0;k < squaresArry.length;k++ ){
       squaresArry[k].move();
    }
    setTimeout(moveObj,1000/60);
}
function createCricle(){
	var squrae = new littleCricle();
    squrae.init();
    squrae.draw();
    squaresArry.push(squrae);
}
for( var i = 0;i<random(400,500);i++ ){
	createCricle();
}

moveObj();

