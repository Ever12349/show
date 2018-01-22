var canvasAreas =document.getElementById("canvas");
canvasAreas.width=  400;
canvasAreas.height=  400;
var canvasX = (canvasAreas.width)/2;
var canvasY = (canvasAreas.height)/2;
var context = canvas.getContext("2d");
context.translate(canvasX,canvasY);
function Clock(){};
Clock.prototype = {
    drawClock:function(){
    	context.font = "bold 14px Arial"; 
    	context.textAlign = "center"; 
    	context.textBaseline = "middle"; 
        for(var i = 1;i<=12;i++){
           var deg = Math.PI*(0.5-i/6);
           context.fillText(i, Math.cos(deg)*130, -Math.sin(deg)*130);
        }
    	context.beginPath();
        context.strokeStyle = "black";
        context.arc(0,0,150,0,Math.PI*2,true);
        context.stroke(); 
        context.beginPath();
        context.arc(0,0,140,0,Math.PI*2,true);
        context.stroke(); 
    },
    nowTime: function(){
    	this.now = new Date();
    },
    init:function(){
    	this.hoursFingerLength = 70;
    	this.minutesFingerLength = 95;
    	this.secondsFingerLength = 120;
    	this.hoursDeg = 0;
    	this.MinutesDeg = 0;
    	this.SecondsDeg = 0;
    	this.hoursX = 0;
    	this.hoursY= 0;
    	this.MinutesX = 0;
    	this.MinutesY= 0;
    	this.SecondsX = 0;
    	this.SecondsY= 0;
    },
    getTimes:function(){
    	this.nowhours =(this.now.getHours()>12)?(this.now.getHours()-12):(this.now.getHours()); 
        this.nowMinutes =this.now.getMinutes() ;
        this.nowSeconds = this.now.getSeconds() ;
    },
    canvasHours:function(){     //画出时针
    	this.hoursDeg = Math.PI/2-Math.PI*(this.nowhours/6+this.nowMinutes/360);
        this.hoursX = (Math.cos(this.hoursDeg))*(this.hoursFingerLength);
        this.hoursY = -(Math.sin(this.hoursDeg))*(this.hoursFingerLength);
        context.beginPath();
        context.strokeStyle = "black";
        context.moveTo(0,0);
        context.lineTo(this.hoursX,this.hoursY);
        context.stroke(); 
    },
    canvasMinutes:function(){     //画出分针
    	this.minutesDeg = Math.PI/2-Math.PI*(this.nowMinutes/30+this.nowSeconds/1800);
        this.minutesX = (Math.cos(this.minutesDeg))*(this.minutesFingerLength);
        this.minutesY = -(Math.sin(this.minutesDeg))*(this.minutesFingerLength);
        context.beginPath();
        context.strokeStyle = "black";
        context.moveTo(0,0);
        context.lineTo(this.minutesX,this.minutesY);
        context.stroke(); 
    },
    canvasSecond:function(){     //画出秒针
    	this.SecondsDeg = Math.PI/2-Math.PI*this.nowSeconds/30;
        this.SecondsX = (Math.cos(this.SecondsDeg))*(this.secondsFingerLength);
        this.SecondsY = -(Math.sin(this.SecondsDeg))*(this.secondsFingerLength);
        context.beginPath();
        context.strokeStyle = "red";
        context.moveTo(0,0);
        context.lineTo(this.SecondsX,this.SecondsY);
        context.stroke(); 
    }
}
var a = new Clock();
a.init();
var timer_01 ;
start();
function start(){
	context.clearRect(-canvasAreas.width/2,-canvasAreas.height/2,canvasAreas.width,canvasAreas.height);
	a.nowTime();
    a.drawClock();
    a.getTimes();
    a.canvasHours();
    a.canvasMinutes();
    a.canvasSecond();
    timer_01 = setTimeout(start,1000);
}
