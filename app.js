'use strict';
angular.module('LunchCheck', [])
    .controller('LunchCheckController', ['$scope', function ($scope) {
        var msn = {
            success : 'Enjoy',
            fail : 'Too much!',
            empty : 'Please enter data first'
        };
        $scope.msn = msn.empty;

        $scope.checkElements = function () {
            var message = msn.empty;
            if($scope.elements && $scope.elements.split) {
                var elements = $scope.elements.split(',');
                if(elements.length <= 3) {
                    message = msn.success;
                } else {
                    message = msn.fail;
                }
            }
            $scope.msn = message;
        };

    }]);