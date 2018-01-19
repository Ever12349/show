var prev = document.getElementById("prev");
var next = document.getElementById("next");
var abc = document.getElementById("abc");
var rows = abc.getElementsByTagName("span");
var de = document.getElementsByClassName("rows");
var imgArray = document.getElementsByTagName("img");
var banner = document.getElementsByClassName("banner")[0];
var timer;
var imgWidth = imgArray[0].offsetWidth;
var count = 0;
function changeRight(){
	var m = count;
    var mRight = (m+1)>(imgArray.length-1)?0:(m+1);
    for(var i =0;i<imgArray.length;i++){
    	if(i != m ){
    		imgArray[i].style.left =-imgWidth+"px";
    	}
    }
    imgArray[m].style.left = imgWidth+"px";;
    imgArray[mRight].style.left = 0;
    for(var k = 0;k<rows.length;k++){
    	rows[k].className = null;
    }
    rows[mRight].className = "on";
    count++;
    if(count > (imgArray.length-1)){
        count = 0;
    }
}
function move(){
	var m = count;
    var mRight = (m+1)>(imgArray.length-1)?0:(m+1);
    for(var i =0;i<imgArray.length;i++){
    	if(i != m ){
    		imgArray[i].style.left =-imgWidth+"px";
    	}
    }
    imgArray[m].style.left = imgWidth+"px";;
    imgArray[mRight].style.left = 0;
    for(var k = 0;k<rows.length;k++){
    	rows[k].className = null;
    }
    rows[mRight].className = "on";
    count++;
    if(count > (imgArray.length-1)){
        count = 0;
    }
    timer = setTimeout(move,3000);
}
init();
timer = setTimeout(move,3000);
function changeLeft(){
	clearTimeout(timer);
	var m = (count-1)<0?(imgArray.length-1):(count-1);  
    var mLeft = (m-1)<0?(imgArray.length-1):(m-1);
    for(var i = 0;i<imgArray.length;i++){
    	if(i != m ){
    		imgArray[i].style.left =-imgWidth+"px";
    	}
    }
    imgArray[m].style.left = 0;
    imgArray[mLeft].style.left = imgWidth+"px";
    for(var k = 0;k<rows.length;k++){
    	rows[k].className = null;
    }
    rows[m].className = "on";
	count--;
    if(count < 0){
    	count = imgArray.length-1;
    }
}
function init(){
	imgArray[0].style.left = 0;
	for(var i = 1;i<imgArray.length;i++){
		imgArray[i].style.left = imgWidth+"px";
	}
}
prev.onclick = function(){
    clearTimeout(timer);
    changeLeft();
}
next.onclick = function(){
    clearTimeout(timer);
    changeRight();
}
banner.onmouseover = function(){
	clearTimeout(timer);
    for(var i = 0;i<de.length;i++){
    	de[i].style.display = "block";
    }
}
banner.onmouseout = function(){
	clearTimeout(timer);
	timer = setTimeout(move,2000);
	for(var i = 0;i<de.length;i++){
    	de[i].style.display = "none";
    }
}
for(var k = 0;k<rows.length;k++){
	rows[k].onmouseover = function(){
		for(var j = 0;j<rows.length;j++){
			rows[j].className = null;
		}
	this.className = "on";
    var spans = Array.prototype.slice.call(rows);
	count = spans.indexOf(this);
	moveImg();
	}
}
function moveImg(){
	clearTimeout(timer);
	for(var i =0;i<imgArray.length;i++){
		imgArray[i].style.left = imgWidth+"px";
	}
	imgArray[count].style.left = 0;
}
