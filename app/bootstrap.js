
require.config({
    baseUrl: "/",
    paths: {
        //"angular": ["https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min", "lib/js/angular.min"],
        //"angular-route": ["https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular-route.min", "lib/js/angular-route"]
        "angular": window.ROOT_PATH + "/lib/js/angular",
        "angular-route": window.ROOT_PATH + "/lib/js/angular-route"
    },
    //这个配置是你在引入依赖的时候的包名
    shim: {
        "angular": {
            exports: "angular"
        },
        "angular-route": {
            deps: ["angular"],
            exports: "angular-route"
        }
    }
});

require(['angular', 'router'], function (angular) {
    angular.bootstrap(document, ['ControlApp']);
});


