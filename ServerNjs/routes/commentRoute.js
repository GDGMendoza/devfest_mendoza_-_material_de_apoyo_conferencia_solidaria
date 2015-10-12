/**
 * Created by leo@GDGMendoza on 19/09/2015.
 */
var express = require('express');
var router = express.Router();
var commentController = require('.././controllers/commentController');

/////////////////////////////////////////////////
/*              Create a new Post              */
/////////////////////////////////////////////////
router.route('/').post(commentController.createComment)

/////////////////////////////////////////////////
/*    mark a Comment as deleted by CommentID   */
/////////////////////////////////////////////////
router.route('/:CommentID').delete(commentController.deleteComment);

/////////////////////////////////////////////////
/*        Update a comment by CommentID        */
/////////////////////////////////////////////////
router.route('/:CommentID').put(commentController.updateComment);

/////////////////////////////////////////////////
/*             Get a list of Posts             */
/////////////////////////////////////////////////
router.route('/').get(commentController.getPosts);

/////////////////////////////////////////////////
/*            get a Posts by PostID            */
/////////////////////////////////////////////////
router.route('/:PostID').get(commentController.getPost);



module.exports = router;