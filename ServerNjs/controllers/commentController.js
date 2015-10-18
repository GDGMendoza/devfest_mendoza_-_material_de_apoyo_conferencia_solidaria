/**
 * Created by leo@GDGMendoza on 19/09/2015.
 */
exports.createComment = createComment;
exports.getComments = getComments;
exports.deleteComment = deleteComment;
exports.updateComment = updateComment;

function createComment(req, res, next) {
    var comment = require('./../models/comment.js');
    var PostTitle = req.body.PostTitle;
    var PostText = req.body.PostText;
    comment.createPost(
        PostTitle,
        PostText,
        function(response){
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(response));
        }
    );
}

function getComments(req, res, next) {
    var comment = require('./../models/comment.js');
    console.log(req);
    var Limit = req.body.Limit;
    var From = req.body.From;
    comment.getPosts(
        Limit,
        From,
        function(response){
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(response));
        }
    );
}

function deleteComment(req, res, next) {
    var comment = require('./../models/comment.js');
    var PostID = req.params.PostID;
    comment.deletePost(
        PostID,
        function(response){
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(response));
        }
    );
}

function updateComment(req, res, next) {
    var comment = require('./../models/comment.js');
    var PostID = req.params.PostID;
    var PostTitle = req.body.PostTitle;
    var PostText = req.body.PostText;
    comment.updatePost(
        PostID,
        PostTitle,
        PostText,
        function(response){
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(response));
        }
    );
}
