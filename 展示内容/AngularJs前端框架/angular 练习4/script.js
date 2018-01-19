var app = angular.module('myApp',[]);
app.controller('myCtrl', function($scope,$http){
    $scope.names = [{Name:"Jack",Country:"Janpan"},
    {Name:"Black",Country:"E.U."},
    {Name:"Kid",Country:"Russia"}];
    $scope.state = true;
    $scope.change = function(){
    	$scope.state =!$scope.state;
    }
});
