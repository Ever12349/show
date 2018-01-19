var app = angular.module('myApp',[]);
app.controller('myCtrl', ['$scope',function($scope){
    //$scope.myNumber = 6546533;

    $scope.change=function(re,err){
        //console.log(attr in err);
        for(attr in err){
        	//console.log(err[attr])
        	if(err[attr] == true){
                re.regValue = attr;
                return ;
        	}
        }
        re.regValue = "pass";
    }

    $scope.regNumber = {
    	regValue:'default',
    	regList : [
             {value:'default',text:'请输入正确的信息'},
             {value:'pattern',text:'不能输入数字以外的信息'},
             {value:'required',text:'不能为空'},
             {value:'pass',text:'正确'}
    	]
    }; 


    $scope.regText = {
    	regValue:'default',
    	regList : [
             {value:'default',text:'请输入正确的信息'},
             {value:'pattern',text:'必须以字符开头'},
             {value:'required',text:'不能为空'},
             {value:'maxlength',text:'不能超过10个字'},
             {value:'minlength',text:'不能少于2个字'},
             {value:'pass',text:'正确'}
    	]
    }; 
    


    $scope.regEmail = {
    	regValue:'default',
    	regList : [
             {value:'default',text:'请输入正确的信息'},
             {value:'email',text:'邮箱地址非法'},
             {value:'required',text:'不能为空'},
             {value:'pass',text:'正确'}
    	]
    };


    $scope.regPassword = {
    	regValue:'default',
    	regList : [
             {value:'default',text:'请输入正确的信息'},
             {value:'minlength',text:'不能少于6个字符'},
             {value:'maxlength',text:'不能超过16个字符'},
             {value:'required',text:'不能为空'},
             {value:'pass',text:'正确'}
    	]
   };

       $scope.regPassword_next = {
    	regValue:'default',
    	regList : [
             {value:'default',text:''},
             {value:'noequal',text:'两次输入不一样'},
             {value:'required',text:'不能为空'},
             {value:'prevNo',text:'第一次密码输入不正确'},
             {value:'pass',text:'正确'}

    	],
    	judge:function(prev,next){
             //console.log($scope.ng_myPassword_next);
             if(prev == undefined){
             	$scope.regPassword_next.regValue = "default";
             	$scope.regPassword_next.regValue = "prevNo";
             }else if(next == undefined){
             	$scope.regPassword_next.regValue = "default";
             	$scope.regPassword_next.regValue = "required";
             	return false;
             }else if(prev == next){
             	$scope.regPassword_next.regValue = "default";
             	$scope.regPassword_next.regValue = "pass";
             	return false;
             }else{
             	$scope.regPassword_next.regValue = "default";
             	$scope.regPassword_next.regValue = "noequal";
             }
             
    	}
   };


}]);
