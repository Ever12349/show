var snowArea = document.getElementById("snow");
var w = window.innerWidth;
var h = window.innerHeight;

snowArea.style.width = w+"px";
snowArea.style.height = h+"px";
snowArea.style.background = "black";

//以上得到一些数据
 
function random(min,max){
	return Math.random()*(max-min)+min;
}

 function Snow(){};
 
 Snow.prototype = {
    create:function(){
        this.s = document.createElement("img");
    },
 	
    init:function(){
 		this.x = random(0,w); //雪花出现的位置
        this.m = random(5,15);//雪花的大小
        this.xspeed = random(0.2,5) ;
        this.yspeed = random(0.8,2.5); //雪花向下飘落的速度
        this.y = 0;
        this.deg = 0;
        this.degspeed = random(0,4);
        this.degdirection = random(0,1)>0.5?0:1;//雪花翻转方向
        this.xDirection = random(0,1)>0.5?0:1;
        this.imgSrc = random(0,1)>0.5?(random(0,1)>0.5?1:2):(random(0,1)>0.5?3:4);//雪花的种类
        this.d =random(0,1)>0.5?0:1; //表示速度变化的方向

 	},

 	append:function(){
 		this.s.src = "images/snow-0"+this.imgSrc+".gif";
 		this.s.style.left = this.x +"px";
 		this.s.style.width = this.m+"px";
 		this.s.style.top = this.y+"px";
        this.s.style.transform = "rotateX("+this.deg*this.degspeed+"deg)";
 		snowArea.appendChild(this.s);
 	},

 	floatDown:function(){
 		//控制雪花x方向上的移动
 		if(this.xDirection == 0){
 			this.x += this.xspeed;
 			if(this.d == 0 ){
 			   this.xspeed += 0.01;
 			   if(this.xspeed > 5){
 			   	  this.d = 1;
 			   	    if(random(0,1) > 0.99){
 			   	        this.xDirection = random(0,1)>0.999?0:1;
 			   	  }
 			   }
 			}else{
               this.xspeed -= 0.02;
               if(this.xspeed < 0.2){
 			   	  this.d = 0;
				  if(random(0,1) > 0.99){
 			   	       this.xDirection = random(0,1)>0.999?0:1;
				  }
 			   }
 			}
 			
            if(this.x > w){
                this.init();
            }
 		}else{
 			this.x -= this.xspeed;
 			if(this.d == 0 ){
 			    this.xspeed += 0.01;
 			    if(this.xspeed > 5){
 			   	    this.d = 1;
 			   	    if(random(0,1) > 0.5){
                        this.xDirection = random(0,1)>0.001?0:1;
                    }
 			   }
 			   
 			}else{
                this.xspeed -= 0.02;
                if(this.xspeed < 0.2){
 			   	    this.d = 0;
 			   	    this.xDirection = random(0,1)>0.001?0:1;
 			    }

 			}
 			if(this.x < 0){
                this.init();
 			}
 		}
        
		this.y += this.yspeed;
 		if(this.y > h ){
            this.init();
        }

        //雪花的旋转
        if(this.degdirection == 0){
            this.deg +=1;
        }else{
            this.deg -=1;
        }
 		this.append();
 	}
 }

 var snowArray  = [];
 
 function createSnow(){
    var snow = new Snow();
 	snow.create();
    snow.init();
 	snow.append();
 	snowArray.push(snow);
 }

 function snowFloatDown(){
	for(var k = 0 ;k < snowArray.length;k++){
 		snowArray[k].floatDown();
 	}
 	setTimeout(snowFloatDown,1000/30);
 }



for(var i = 0;i < 30;i++){
    setTimeout(createSnow,400*i*random(0.4,2));
}

snowFloatDown();
