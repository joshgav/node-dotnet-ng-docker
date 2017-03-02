var app = angular.module('myApp', ['ngRoute'])

.controller('MainController', function($scope, $http) {
    var colours = ["black", "green", "red", "blue", "orange", "purple", "gray"];
    $scope.messages = [];
    $scope.sayHelloToServer = function() {
        $http.get("/api?_=" + Date.now()).then(function(response) {
            $scope.messages.push({content: response.data, style: colours[$scope.messages.length % colours.length]});

            // Make request to /metrics            
            $http.get("/metrics?_=" + Date.now()).then(function(response) {
                $scope.metrics = response.data;
            });
        });
    };
    
    $scope.sayHelloToServer();
});
