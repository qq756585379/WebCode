/**
 * Created by Administrator on 2017/3/25.
 */
(function(angular){
    'use strict';
// 创建主页模块
    var module = angular.module('index', ['ngRoute']);
// 配置模块的路由
    module.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/index', {
            templateUrl: './js/index/view.html',
            controller: 'IndexController'
        });
    }]);
    module.controller('IndexController',['$scope',function($scope){
        var mySwiper = new Swiper('.swiper-container', {
            direction:"horizontal",/*横向滑动*/
            loop: true,
            //如果需要分页器
            pagination: '.swiper-pagination',
            paginationClickable: true,
            autoplay: 2000,
            autoplayDisableOnInteraction: false,
            observer:true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents:true//修改swiper的父元素时，自动初始化swiper
        });
    }]);
})(angular);