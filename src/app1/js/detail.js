/**
 * Created by luosa on 2017/3/24.
 */
(function(angular) {
    'use strict';
    var module=angular.module('detail',[]);
    module.controller('detailCtrl',['$scope',function ($scope) {
        $scope.bannerList1111=[
            {src:"./images/banner1.jpg"},
            {src:"./images/banner1.jpg"},
            {src:"./images/banner1.jpg"}
        ];
    }]);
})(angular);


