/**
 * Created by viveksh2 on 6/29/16.
 */
angular.module('module2',[])
    .filter('justCode', function () {
        return function(str){
            return str.substring(str.indexOf("(")+1,str.indexOf(")") );
        }
    });
