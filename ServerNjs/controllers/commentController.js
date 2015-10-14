/**
 * Created by leo@GDGMendoza on 19/09/2015.
 */

var createComment = function(req, res, next) {
    var post = require('./../models/post.js');
    var PostTitle = req.body.PostTitle;
    var PostText = req.body.PostText;
    post.createPost(
        PostTitle,
        PostText,
        function(response){
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(response));
        }
    );
};

var getComments = function(req, res, next) {
    var post = require('./../models/post.js');
    console.log(req);
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
};

var deleteComment = function(req, res, next) {
    var post = require('./../models/post.js');
    var PostID = req.params.PostID;
    post.deletePost(
        PostID,
        function(response){
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(response));
        }
    );
};

var updateComments = function(req, res, next) {
    var post = require('./../models/post.js');
    var PostID = req.params.PostID;
    var PostTitle = req.body.PostTitle;
    var PostText = req.body.PostText;
    post.updatePost(
        PostID,
        PostTitle,
        PostText,
        function(response){
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(response));
        }
    );
};

exports.createPost = createPost;
exports.getPosts = getPosts;
exports.getPost = getPost;
exports.deletePost = deletePost;
exports.updatePost = updatePost;