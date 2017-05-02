/**
 * Created by viveksh2 on 6/29/16.
 */
angular.module('module1',['module2', 'module3'])
    .controller('module1Ctrl', function ($scope, myFactory) {
        $scope.getDataFromServer = function () {
            myFactory.getData().then(
                function(res){
                    //console.log(res.data);
                    $scope.flights = res.data;
                }
                ,function (err) {
                    //console.log(err.message);
            })
        };

        $scope.modeStatus = false;
        $scope.mode = "Table";

        $scope.changeMode = function(event) {
            $scope.modeStatus = !$scope.modeStatus;
            event.target.checked = $scope.modeStatus;

            $scope.mode = $scope.modeStatus ? "List" : "Table";
        };

        $scope.toggleTemplate = function() {
            return $scope.modeStatus ? "../view/template/table.html" : "../view/template/list.html";
        };

        $scope.checkBoxs = ['bubble', 'danger'];

        $scope.checkboxModel = {
            'bubble' : false,
            'danger' : false
        };

        $scope.onlyJFK = false;

        $scope.getDataFromServer();
    })
    .filter('flightJFK', function() {
        return function(flights, onlyJFK) {
            var result = [];
            flights.forEach(function(flight) {
                var str = flight.code;
                if (onlyJFK) {
                    if (str.substring(str.indexOf("(")+1, str.indexOf(")")) === "KJFK") {
                        result.push(flight);
                    }
                } else {
                    result.push(flight);
                }
            });

            return result;
        }
    });

