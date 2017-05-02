/**
 * Created by Yajing Li on 4/24/2017.
 */
/*
// factory expect object
angular.module("module3", [])
    .factory("myFactory", function($http) {
        var myObj = {};
        myObj.getData = function() {
            return $http.get('./../model/flights.json');
        };
        return myObj;
    });
*/

// service expect constructor function
angular.module("module3", [])
    .service('myFactory', function ($http) {
        this.getData = function() {
            return $http.get('./../model/flights.json');
        }
    });