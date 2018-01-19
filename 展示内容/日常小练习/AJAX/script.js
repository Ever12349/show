var createXHR = (function(){
	if (typeof XMLHttpRequest == "undefined")
		XMLHttpRequest = function () {
	    try {return new ActiveXObject ("Msxml2.XMLHTTP.6.0");}
		catch (e) {}
		try {return new ActiveXObject ("Msxml2.XMLHTTP.3.0");}
		catch (e) {}
		try {return new ActiveXObject ("Msxml2.XMLHTTP");}
		catch (e) {}
		return false;
	    }
	return new XMLHttpRequest ();	
});

var testXHR = createXHR();

testXHR.open("GET","text.json",true);
if(testXHR){
	testXHR.onreadystatechange = function(){
		if(testXHR.readyState == 4 && testXHR.status ==200){
			var text = testXHR.responseText;
			var jsonText = JSON.parse(text);
			//console.log(jsonText);
			//alert(jsonText.title);
			
			
			var pargraph = document.createElement("p");
			pargraph.innerHTML =text +"<br/>"+ jsonText.title;
			document.body.appendChild(pargraph);
		}
	}
}






testXHR.send(null);



