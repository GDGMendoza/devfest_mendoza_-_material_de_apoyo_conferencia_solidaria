(function() {
  'use strict';

  angular
    .module('gdgBlog')
    .controller('PostListController', PostListController);

  /** @ngInject */
  function PostListController() {
    var vm = this;

    console.log("muerte");
  }
})();
