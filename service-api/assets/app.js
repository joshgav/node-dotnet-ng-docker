var app = angular.module('myApp', ['ngRoute'])

.controller('MainController', function($scope, $http) {
    $scope.messages = [];
    $scope.sayHelloToServer = function() {
        $http.get("/api?_=" + Date.now()).then(function(response) {
            $scope.messages.push({content: response.data, style: getStyle()});

            // Make request to /metrics            
            $http.get("/metrics?_=" + Date.now()).then(function(response) {
                $scope.metrics = response.data;
            });
        });
    };
    
    $scope.sayHelloToServer();
    
    var colors = ["black", "green", "red", "blue", "orange", "purple", "gray"];
    var colorIndex = 0;
    
    var getStyle = function() {
        if (colorIndex >= colors.length) colorIndex = 0;
        return {color:colors[colorIndex++]};
    }
});
