/**
 * Created by Administrator on 2017/3/25.
 */
(function(angular){
    'use strict';
// 创建主页模块
    var module = angular.module('joinus', ['ngRoute' ]);
// 配置模块的路由
    module.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/joinus', {
            templateUrl: './js/joinus/view.html',
            controller: 'JoinusController'
        });
    }]);
    module.controller('JoinusController',['$scope',function($scope){
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

        $scope.show123 = function(i){
            var joinus=document.getElementsByClassName('joinus-ul');
            var items=joinus[0].getElementsByTagName("li");

            for(var k=0;k<items.length;k++){
                var dd=items[k].getElementsByClassName('dd');
                dd[0].style.display='none';
            }
            var tt=items[i].getElementsByClassName('dd');
            tt[0].style.display='block';
        };
    }]);
})(angular);