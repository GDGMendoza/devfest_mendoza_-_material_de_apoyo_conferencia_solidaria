/**
 * Created by leo@GDGMendoza on 19/09/2015.
 */
var express = require('express');
var router = express.Router();
var commentController = require('.././controllers/commentController');

/////////////////////////////////////////////////
/*              Create a new Comment              */
/////////////////////////////////////////////////
router.route('/').post(commentController.createComment);

/////////////////////////////////////////////////
/*    mark a Comment as deleted by CommentID   */
/////////////////////////////////////////////////
router.route('/:CommentID').delete(commentController.deleteComment);

/////////////////////////////////////////////////
/*        Update a comment by CommentID        */
/////////////////////////////////////////////////
router.route('/:CommentID').put(commentController.updateComment);

/////////////////////////////////////////////////
/*        Get all comments of a Post           */
/////////////////////////////////////////////////
router.route('/').get(commentController.getComments);


module.exports = router;