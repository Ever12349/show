var drawing = document.getElementById("demo");
var w = window.innerWidth;//获取屏幕的宽度
var h = window.innerHeight;//获取屏幕的高度
drawing.width = w;//设置画布的宽度为获取屏幕的宽度
drawing.height = h;//设置画布的高度为获取屏幕的高度
var context = drawing.getContext("2d");//设置canvas2d上下文

function random(min,max){//随机数生成函数
	return Math.random()*(max-min)+min;
}

function Star(){};//定义star对象
Star.prototype = {
	init:function(){
		this.x = random(0,w);//设置星星出现位置的x坐标
		this.y =random(0,h);//设置星星出现位置的y坐标
		this.s =random(0,1);//控制星星大小的变化参数
		this.speed = random(0.5,1);//星星变大变小的速度
		this.d =random(0,1)>0.5?0:1;//星星是变大还是变小的控制参数
		this.xmax = random(0,10);//控制星星的最大值参数1
		this.ymax = random(1,3);//控制星星的最大值参数2
	},
	draw:function(){//使用canvas绘出图形
		context.fillStyle = "white";
        context.beginPath();
        context.moveTo(this.x-this.xmax*this.s,this.y);
        context.lineTo(this.x,this.y-this.ymax*this.s);
        context.lineTo(this.x+this.xmax*this.s,this.y);
        context.lineTo(this.x,this.y+this.ymax*this.s);
        context.closePath();
        context.fill();
        context.beginPath();
        context.moveTo(this.x,this.y-this.xmax*this.s);
        context.lineTo(this.x+this.ymax*this.s,this.y);
        context.lineTo(this.x,this.y+this.xmax*this.s);
        context.lineTo(this.x-this.ymax*this.s,this.y);
        context.closePath();
        context.fill();
	},
	shiny:function(){//控制星星变化
		if(this.d == 0){
			this.s+=0.02*this.speed;
			if(this.s>1){
				this.d = 1;
			}else{
				this.d = 0;
			}
		}else{
			this.s -= 0.02*this.speed;
			if(this.s < 0){
				this.d = 0;
			}else{
				this.d = 1;
			}
		};
		this.draw();
	}
}
var starArrays = [];//设置一个数组用来存储星星
function shinyStar(){//星星闪烁函数
    context.clearRect(0,0,w,h);
    context.fillStyle = "white";
    context.beginPath();
    context.moveTo(this.x-this.xmax*this.s,this.y);
    context.lineTo(this.x,this.y-this.ymax*this.s);
    context.lineTo(this.x+this.xmax*this.s,this.y);
    context.lineTo(this.x,this.y+this.ymax*this.s);
    context.closePath();
    context.fill();
    context.beginPath();
    context.moveTo(this.x,this.y-this.xmax*this.s);
    context.lineTo(this.x+this.ymax*this.s,this.y);
    context.lineTo(this.x,this.y+this.xmax*this.s);
    context.lineTo(this.x-this.ymax*this.s,this.y);
    context.closePath();
    context.fill();
    for(var k =0;k < starArrays.length;k++){
    	starArrays[k].shiny();
    }
}
function createStar(){//创建星星函数
	var star = new Star();
	star.init();
	star.draw();
	starArrays.push(star);
}
for(var i = 0;i<400;i++){
	createStar();
}
var timer = setInterval(shinyStar,1000/60);//定时器