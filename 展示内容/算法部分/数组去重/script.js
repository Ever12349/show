

var function_01 = (function(){         //数组去重
     var idInputText_001 = document.getElementById("idInputText_001");
     var idInputButton_01 = document.getElementById("idInputButton_01");
     var idResultSpan_01 = document.getElementById("idResultSpan_01");
     
     //以上获取数据

    idInputButton_01.onclick =function(){
        var inputData = idInputText_001.value;
        var testReg =/^(\d+\,)+\d+$/;
        var b = testReg.test(inputData);
        //alert(b);
        if(b){
/*       var result = [inputData[0]];
            var data = inputData.split(",");
            for(var i =0;i<data.length;i++){
                var r = false ;
                for(var j =0;j<result.length;j++){
                	if(result[j]==data[i]){
                        r = true;
                        break;
                	}
                }
                if(!r){
                	result.push(data[i]);
                }
            }*/ 
             var data = inputData.split(",");
             var result = arrayMange(data);
             idResultSpan_01.innerHTML = result;
        }else{
            idResultSpan_01.innerHTML = "数据错误";
        }
    }

function arrayMange(arr){
     var tempObject ={};
     var result =[];
     for(var i = 0;i<arr.length;i++){
     	if(!tempObject[arr[i]]){
     		result.push(arr[i]);
     		tempObject[arr[i]] = 1;
     	}
     }
     return result;
}

});

var function_02 = (function(){         //统计出现最多的字符
	var idInputText_002 = document.getElementById("idInputText_002");
    var idInputButton_02 = document.getElementById("idInputButton_02");
    var idResultSpan_02 = document.getElementById("idResultSpan_02");

    idInputButton_02.onclick=function(){
        var inputData = idInputText_002.value;
        var count=[];
        var max=0,index;
        for(var i=0;i<inputData.length;i++){
            count[i] = 0;
        	for(var j =0;j<inputData.length;j++){
        		if(inputData[j]==inputData[i]){
        			count[i]++;
        		}
        	}
        }
        for(var m = 0;m<count.length;m++){
            if(count[m]>max){
            	max=count[m];
            	index=m;
            }
        }
        idResultSpan_02.innerHTML = inputData[index];
    }

     
});




function_01();
function_02();