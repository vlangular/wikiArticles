var wikiArticles = angular.module('wikiArticles', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'core/home.view.html'
        })
        .state('articles', {
            url: '/articles',
            templateUrl: 'article/articles.view.html'
        })

        .state('categories', {
            url: '/categories',
            templateUrl: 'category/categories.view.html'
        });
});
