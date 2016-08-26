const app = angular.module('QuoteOfDaDay', []);

app.controller('QuoteController', ['$scope', 'quoteService', function($scope, quoteService){

  $scope.quote={};
  $scope.handleClick = function(){
    quoteService.getQuote().success(res=>$scope.quote=res);
  }
  $scope.handleClick();
}]);

app.factory('quoteService', ['$http', function($http){
  return{
    getQuote: function(){
      return $http.get("http://fvi-grad.com:4004/quote");
    }
  }
}])
