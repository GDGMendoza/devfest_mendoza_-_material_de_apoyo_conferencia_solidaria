(function() {
  'use strict';

  angular
    .module('gdgCore')
    .factory('gdgCommentEndpoint', CommentEndpoint)
    
    /** @ngInject */
    function CommentEndpoint ($http){
      
      var ENDPOINT_PATH = '/comment';
      var CREATE_COMMENT_PATH = '/create';
      var DELETE_COMMENT_PATH = '/delete';
      
      var endpoint = {};
      endpoint.createComment = createComment;
      endpoint.deleteComment = deleteComment;
      return endpoint;
      
      function createComment(postId, comment){
        return $http.post(ENDPOINT_PATH + CREATE_COMMENT_PATH + '/' + postId, comment);
      }
      
      function deleteComment(commentId){
        return $http.delete(ENDPOINT_PATH + DELETE_COMMENT_PATH + '/' + commentId);
      }
      
    }

})();
