/**
* Created by leo@GDGMendoza on 19/09/2015.
*/
exports.createPost = createPost;
exports.getPosts = getPosts;
exports.getPost = getPost;
exports.deletePost = deletePost;
exports.updatePost = updatePost;

function createPost(req, res, next) {
  var post = require('./../models/post.js');
  var PostTitle = req.body.PostTitle;
  var PostText = req.body.PostText;
  var PostCategory = req.body.PostCategory;
  post.createPost(
      PostTitle,
      PostCategory,
      PostText,
      function(response){
          res.setHeader('Content-Type', 'application/json');
          res.send(JSON.stringify(response));
      }
  );
}

function getPosts(req, res, next) {
  var post = require('./../models/post.js');
  var Limit = req.body.Limit;
  var From = req.body.From;
  post.getPosts(
      Limit,
      From,
      function(response){
          res.setHeader('Content-Type', 'application/json');
          res.send(JSON.stringify(response));
      }
  );
}

function getPost(req, res, next) {
  var post = require('./../models/post.js');
  var PostID = req.params.PostID;
  post.getPost(
      PostID,
      function(response){
          res.setHeader('Content-Type', 'application/json');
          res.send(JSON.stringify(response));
      }
  );
}

function deletePost(req, res, next) {
  var post = require('./../models/post.js');
  var PostID = req.params.PostID;
  post.deletePost(
      PostID,
      function(response){
          res.setHeader('Content-Type', 'application/json');
          res.send(JSON.stringify(response));
      }
  );
}

function updatePost(req, res, next) {
  var post = require('./../models/post.js');
  var PostID = req.params.PostID;
  var PostTitle = req.body.PostTitle;
  var PostText = req.body.PostText;
  var PostCategory = req.body.PostCategory;
  post.updatePost(
      PostID,
      PostTitle,
      PostCategory,
      PostText,
      function(response){
          res.setHeader('Content-Type', 'application/json');
          res.send(JSON.stringify(response));
      }
  );
}
