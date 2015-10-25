/**
* Created by leo@GDGMendoza on 05/09/2015.
*/
var mysql = require('./../dbs/mysql');
exports.createPost = createPost;
exports.getPosts = getPosts;
exports.getPost = getPost;
exports.deletePost = deletePost;
exports.updatePost = updatePost;

function createPost(PostTitle, PostCategory, PostText, callback){
  var query = 'INSERT INTO post SET ?';
  var timeNow = new Date();
  timeNow = timeNow.toISOString().replace(/T/, ' ').replace(/\..+/, '');
  var post =
  {
      'PostTitle': PostTitle,
      'PostText' : PostText,
      'PostCategory': PostCategory,
      'PostDate' : timeNow
  };
  mysql.query(query, post, function(err, rows, fields) {
      if (err) console.warn(err);
      callback({'status': true});
  });
}

function getPosts(Limit, From, callback){
  if(Limit > 0)
  {
      if(From > 0)
      {
          var query = "SELECT * FROM post WHERE PostDeletedDate IS NULL ORDER BY PostDate desc LIMIT " + From + ", " + Limit;
          mysql.query(query, function(err, rows, fields) {
              if (err) console.warn(err);
              callback(rows);
          });
      }
      else
      {
          var query = "SELECT * FROM post WHERE PostDeletedDate IS NULL ORDER BY PostDate desc LIMIT " + Limit;
          mysql.query(query, function(err, rows, fields) {
              if (err) console.warn(err);
              callback(rows);
          });
      }
  }
  else
  {
      var query = "SELECT * FROM post WHERE PostDeletedDate IS NULL ORDER BY PostDate desc";
      mysql.query(query, function(err, rows, fields) {
          if (err) console.warn(err);
          callback(rows);
      });
  }
}

function getPost(PostID, callback){
  var query = "SELECT * FROM post WHERE PostDeletedDate IS NULL AND PostID = " + PostID;
  mysql.query(query, function(err, rows, fields) {
      if (err) console.warn(err);
      callback(rows);
  });
}

function deletePost(PostID, callback){
  var query = "UPDATE post SET ? WHERE PostID = " + PostID;
  var timeNow = new Date();
  timeNow = timeNow.toISOString().replace(/T/, ' ').replace(/\..+/, '');
  var post =
  {
      'PostDeletedDate' : timeNow
  };
  mysql.query(query, post, function(err, rows, fields) {
      if (err) console.warn(err);
      callback({'status': true});
  });
}

function updatePost(PostID, PostTitle, PostCategory, PostText, callback){
  var query = "UPDATE post SET ? WHERE PostID = " + PostID;
  var post =
  {
      'PostTitle': PostTitle,
      'PostText' : PostText,
      'PostCategory': PostCategory
  };
  mysql.query(query, post, function(err, rows, fields) {
      if (err) console.warn(err);
      callback({'status': true});
  });
}
