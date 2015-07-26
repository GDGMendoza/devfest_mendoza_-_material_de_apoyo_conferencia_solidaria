(function() {
  'use strict';

  angular
    .module('gdgBlog')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('blog.list', {
        url: '/',
        templateUrl: 'app/blog/list/list.html',
        controller: 'PostListController',
        controllerAs: 'PostList'
      })
      .state('blog.create', {
        url: '/create',
        templateUrl: 'app/blog/form/form.html',
        controller: 'PostCreateController',
        controllerAs: 'PostCreate'
      })
      .state('blog.detail', {
        url: '/:id',
        templateUrl: 'app/blog/detail/detail.html',
        controller: 'PostDetailController',
        controllerAs: 'PostDetail'
      })
      .state('blog.edit', {
        url: '/:id/edit',
        templateUrl: 'app/blog/form/form.html',
        controller: 'PostEditController',
        controllerAs: 'PostEdit'
      });



    $urlRouterProvider.otherwise('/blog/list');
  }

})();
