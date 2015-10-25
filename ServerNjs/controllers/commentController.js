/**
* Created by leo@GDGMendoza on 19/09/2015.
*/
exports.createComment = createComment;
exports.getComments = getComments;
exports.deleteComment = deleteComment;
exports.updateComment = updateComment;

function createComment(req, res, next) {
  var comment = require('./../models/comment.js');
  var Comment = req.body.Comment;
  comment.createComment(
    Comment,
    function(response){
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(response));
    }
  );
}

function getComments(req, res, next) {
  var comment = require('./../models/comment.js');
  var Limit = req.body.Limit;
  var From = req.body.From;
  var PostID = req.params.PostID;
  comment.getComments(
    Limit,
    From,
    PostID,
    function(response){
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(response));
    }
  );
}

function deleteComment(req, res, next) {
  var comment = require('./../models/comment.js');
  var CommentID = req.params.CommentID;
  comment.deleteComment(
    CommentID,
    function(response){
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(response));
    }
  );
}

function updateComment(req, res, next) {
  var comment = require('./../models/comment.js');
  var CommentID = req.params.CommentID;
  var Comment = req.body.Comment;
  comment.updateComment(
    CommentID,
    Comment,
    function(response){
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(response));
    }
  );
}
