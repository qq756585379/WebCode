(function(angular) {
    angular.module('myApp.directives.auto_open', [])
        .directive('autoOpen', ['$scope', function($scope) {
            return {
                restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
                link: function($scope, iElm, iAttrs, controller) {


                    $scope.$watch('$location.path()', function(now) {
                        // 当path发生变化时执行，now是变化后的值
                        var aLink = iElm.children().attr('href');
                        var type = aLink.replace(/#!(\/.+?)/, '$1');
                        //console.log('type:'+type);
                        //console.log('now:'+now);
                        if (now.startsWith(type)) {
                            // 访问的是当前链接
                            iElm.parent().children().removeClass('active');
                            iElm.addClass('active');
                        }
                    })
                }
            };
        }]);
})(angular);
