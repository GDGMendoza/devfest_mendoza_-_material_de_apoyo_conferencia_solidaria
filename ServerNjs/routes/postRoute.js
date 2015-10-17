/**
 * Created by leo@GDGMendoza on 05/09/2015.
 */
var express = require('express');
var router = express.Router();
var postController = require('.././controllers/postController');

/////////////////////////////////////////////////
/*              Create a new Post              */
/////////////////////////////////////////////////
router.route('/').post(postController.createPost);

/////////////////////////////////////////////////
/*             Get a list of Posts             */
/////////////////////////////////////////////////
router.route('/').get(postController.getPosts);

/////////////////////////////////////////////////
/*            get a Posts by PostID            */
/////////////////////////////////////////////////
router.route('/:PostID').get(postController.getPost);

/////////////////////////////////////////////////
/*      mark a Posts as deleted by PostID      */
/////////////////////////////////////////////////
router.route('/:PostID').delete(postController.deletePost);

/////////////////////////////////////////////////
/*          Update a post by PostID            */
/////////////////////////////////////////////////
router.route('/:PostID').put(postController.updatePost);

module.exports = router;