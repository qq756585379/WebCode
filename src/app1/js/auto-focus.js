/**
 * Created by luosa on 2017/3/23.
 */

(function(angular) {
    'use strict';
    angular.module('app.directives.auto_focus', [])
        .directive('autoFocus', ['$location', function($location) {
            return {
                restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
                link: function($scope, iElm, iAttrs, controller) {
                    //iElm是指令用在哪个元素上,这里是li标签
                    $scope.$location = $location;
                    $scope.$watch('$location.path()', function(now) {
                        console.log($location.path());
                        var aLink = iElm.children().attr('href');//获取a标签的href属性
                        var type =aLink.replace("#","");
                        if (now.startsWith(type)) {
                            iElm.parent().children().removeClass('active');
                            iElm.addClass('active');
                        }
                    });
                }
            };
        }]);
})(angular);
