var app = angular.module('myApp',[]);

app.directive("myDirective",function(){
    return {
        restrict:"AE",
        replace:true,
        scope:{
            myId:"@",
            myText:"=",
            myFn:"&"
        },
        controller:["$scope",function($scope){
            $scope.text = "这是一个独立的作用域";
        }],
        templateUrl:"temp.html"
    }
})
app.controller('myCtrl', ['$scope',function($scope){
    $scope.text = "这是一个内容";
    $scope.show = function(str){
        alert(str);
    }
}]);
