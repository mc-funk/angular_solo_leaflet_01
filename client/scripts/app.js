var myApp = angular.module('app', ['angular-route', 'leaflet-directive']);
//initial initialization of the app itself. Must be upfront
//Array sets up dependency structure (currently no dependencies)

//This is going to be a controller module.

/*myApp.controller('WelcomeController', ["$scope", function($scope) {
    $scope.heading = "Message: ";
    $scope.updateMessage = function () {
        $scope.message = "hello " + $scope.name;
    };
    $scope.goodByeMessage = function () {
        $scope.message = "Goodbye, " + $scope.name + ":("
    };
}
]);
//defining a new controller*/

myApp.controller("GeoJSONController", [ '$scope', '$http', function($scope, $http) {
    angular.extend($scope, {

        japan: {
            lat: 37.26,
            lng: 138.86,
            zoom: 4
        },
        defaults: {
            scrollWheelZoom: false
        }
    });

    // Get the countries geojson data from a JSON
    $http.get("./vendor/japan_geo/japan.json").success(function(data, status) {
        console.log("Japan data: ", data, "status: ", status)
        angular.extend($scope, {
            geojson: {
                data: data,
                style: {
                    fillColor: "green",
                    weight: 2,
                    opacity: 1,
                    color: 'white',
                    dashArray: '3',
                    fillOpacity: 0.7
                }
            }
        });
    });
}]);

myApp.controller("SimpleMapController", [ '$scope', function($scope) {
    angular.extend($scope, {
        defaults: {
            scrollWheelZoom: false
        }
    });
}]);