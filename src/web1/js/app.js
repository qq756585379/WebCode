/**
 * Created by Administrator on 2017/3/25.
 */
(function(angular){
     "use strict";
    var module = angular.module('myApp',['ngRoute','index','introduction','examples','joinus','contactus','myApp.directives.auto_focus']);
    module.config(['$routeProvider', '$locationProvider', function($routeProvider,$locationProvider) {
        // 定义hash的前缀为#！
        $locationProvider.hashPrefix("!");
        $routeProvider.otherwise({ redirectTo: '/index' });

    }]);
    module.controller('mainController',['$scope',function($scope){

    }]);
})(angular);