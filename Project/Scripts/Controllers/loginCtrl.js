var app = angular.module('app', ['react']);

app.controller('mainCtrl', ['$scope', '$window', function ($scope, $window) {
    $scope.person = { fname: '', pass: '' };
    $scope.worker = [{ name: "tami", pass: "123" }, { name: "tami", pass: "123" }];
    $scope.cheak = function () {
        for (var i = 0; i < $scope.worker.length; i++) {
            if ($scope.worker[i].name == $scope.person.fname && $scope.worker[i].pass == $scope.person.pass) {
                $window.location.href = 'homePage.html';
            }
        }
    }


}]);

var Hello = React.createClass({
    propTypes: {
        fname: React.PropTypes.string.isRequired,
        pass: React.PropTypes.string.isRequired
    },


    render: function () {
        return React.DOM.span(null,
          'Hello ' + this.props.fname
        );
    }
});

app.value("Hello", Hello);

app.directive('hello', function (reactDirective) {
    return reactDirective(Hello);
});