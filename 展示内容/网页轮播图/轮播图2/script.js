
(function(){
var stage = document.getElementById("stages");
var imgArrays = document.getElementsByTagName("img");  //长度为7
var imgWidth = parseInt(imgArrays[0].width); 

var abc = document.getElementById("abc");
var spans = abc.getElementsByTagName("span");

var banner = document.getElementsByClassName("banner")[0];
var rows = document.getElementsByClassName("rows");  //长度为6

var prev = document.getElementById("prev");
var next = document.getElementById("next");

var timer_01,timer_02 ;

var index = 0,count;


function init(){
	stage.style.left = 0;
}

init();//初始化
timer_02 = setTimeout(moveImg,3000);

function moveImg(){ //自动切换
	index++;
	if(index > (imgArrays.length-1)){  //index最大值是6
		index = 0;
		stage.style.left = 0;
		clearTimeout(timer_02);
		moveImg();
		spanChange(); 
		return false;
	}
	clearTimeout(timer_01);
	goLeft();
	spanChange();
	timer_02 = setTimeout(moveImg,3000);
}
function moveRight(){ //向右切换
	index++;
	if(index > (imgArrays.length-1)){  //index最大值是6
		index = 0;
		stage.style.left = 0;
		clearTimeout(timer_02);
		moveImg();
		spanChange(); 
		return false;
	}
	clearTimeout(timer_01);
	goLeft();
	spanChange();
}
function goLeft(){  //向左动画效果
    var curLeft = parseInt(stage.style.left);
	var lastLeft = -imgWidth*(index);
	var speed = Math.ceil((curLeft - lastLeft)/15);
	curLeft -= speed;
	stage.style.left = curLeft+"px";
	timer_01 = setTimeout(goLeft,1000/60);
}

function spanChange(){  //标签切换
	for(var i = 0 ;i<spans.length;i++){
		spans[i].className = null;
	}
	count = index;
	if(count>5){
		count = 0;
	}else if(count<0){
		count = spans.length-1;
	}
	spans[count].className = "on";
}
banner.onmouseover = function(){   //鼠标放上后停止切换
	clearTimeout(timer_02);
	for(var i =0;i<rows.length;i++){
		rows[i].style.display = "block";
	}
}

banner.onmouseout = function(){   //鼠标拿开后继续自动切换
	clearTimeout(timer_02);
	for(var i =0;i<rows.length;i++){
		rows[i].style.display = "none";
	}
	timer_02 = setTimeout(moveImg,2000);
}



prev.onclick = function(){   //手动向前切换
    clearTimeout(timer_02);
    moveRight();
}

function moveLeft(){   
	index--;
	if(index < 0){
		index = imgArrays.length-1;
		clearTimeout(timer_02);
		stage.style.left = -imgWidth*index +"px";
		index--;
		clearTimeout(timer_01);
		goRIght();
		spanChange();
		return false;
	}
	clearTimeout(timer_01);
	goRIght();
	spanChange();
}

function goRIght(){
	var curLeft = parseInt(stage.style.left);
	var lastLeft = -imgWidth*(index); 
	var speed = Math.ceil((lastLeft-curLeft)/15);
	curLeft += speed;
	stage.style.left = curLeft+"px";
	timer_01 = setTimeout(goRIght,1000/60);
}

next.onclick = function(){
   clearTimeout(timer_02);
   moveLeft();
}

for(var i =0;i<spans.length;i++){
	spans[i].onmouseover = function(){
		for(var j =0;j<spans.length;j++){
			spans[j].className = null;
		}
		this.className = "on";
		var t = Array.prototype.slice.call(spans);//将伪数组转化成真数组
	    var la = t.indexOf(this);
        imgTothis(la);
	}
}

function imgTothis(la){
	if(la > index){
		index = la;
		clearTimeout(timer_01);
		goLeft();
	}else{
		index = la;
		clearTimeout(timer_01);
		goRIght();
	}
}

})();

