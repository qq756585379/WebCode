(function(angular) {
    'use strict';
    var module=angular.module('app1',['ngRoute','app.directives.auto_focus']);

    module.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/chessGame', {
            templateUrl: './view1.html',
            controller: 'ctrl1'
        }).when('/saishiActivity', {
            templateUrl: './view2.html',
            controller: 'ctrl2'
        }).when('/vip', {
            templateUrl: './view3.html',
            controller: 'ctrl3'
        }).otherwise({ redirectTo: '/chessGame' });
    }]);

    module.controller('appCtrl',['$scope',function ($scope) {
        $scope.bannerList=[
            {src:"./images/banner1.jpg"},
            {src:"./images/banner1.jpg"},
            {src:"./images/banner1.jpg"}
        ];
    }]);

    module.controller('ctrl1',['$scope',function ($scope) {

    }]);

    module.controller('ctrl2',['$scope',function ($scope) {

    }]);

    module.controller('ctrl3',['$scope',function ($scope) {

    }]);

})(angular);


