(function() {
  'use strict';

  angular
    .module('angular1IsHere')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('blog', {
        url: '/blog',
        template: '<div ui-view></div>',
        abstract: true
      });

    $urlRouterProvider.otherwise('/blog/');
  }

})();
