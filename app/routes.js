(function () {
    //路由
    controlApp.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: "partials/head.html"
            })
            .otherwise({ redirectTo: '/' });
    }]);

    //
})();

