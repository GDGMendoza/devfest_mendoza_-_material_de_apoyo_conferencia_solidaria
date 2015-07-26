(function() {
  'use strict';

  angular
    .module('gdgCore')
    .factory('gdgPostEndpoint', PostEndpoint)
    
    /** @ngInject */
    function PostEndpoint ($http){
      
      var ENDPOINT_PATH = '/post';
      var CREATE_POST_PATH = '/create';
      var READ_POST_PATH = '/get';
      var UPDATE_POST_PATH = '/update';
      var DELETE_POST_PATH = '/delete';
      
      var endpoint = {};
      endpoint.createPost = createPost;
      endpoint.updatePost = updatePost;
      endpoint.deletePost = deletePost;
      endpoint.getPostList = getPostList;
      endpoint.getPost = getPost;
      return endpoint;
      
      function createPost(post){
        return $http.post(ENDPOINT_PATH + CREATE_POST_PATH, post);
      }
      
      function updatePost(postId, post){
        return $http.put(ENDPOINT_PATH + UPDATE_POST_PATH + '/' + postId, post);
      }
      
      function deletePost(postId){
        return $http.delete(ENDPOINT_PATH + DELETE_POST_PATH + '/' + postId);
      }
      
      function getPostList(limit, from){
        var params = { limit: limit }
        if (!_.isUndefined(from)) params.from = from;
        
        return $http.get(ENDPOINT_PATH + READ_POST_PATH, { params: params });
      }
      
      function getPost(postId){
        return $http.get(ENDPOINT_PATH + READ_POST_PATH + '/' + postId);
      }
      
    }

})();
