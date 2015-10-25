/**
* Created by leo@GDGMendoza on 17/10/2015.
*/
exports.createComment = createComment;
exports.getComments = getComments;
exports.deleteComment = deleteComment;
exports.updateComment = updateComment;

function createComment(Comment, PostID, callback){
  var query = 'INSERT INTO comment SET ?';
  var timeNow = new Date();
  timeNow = timeNow.toISOString().replace(/T/, ' ').replace(/\..+/, '');
  var comment =
  {
    'Comment' : Comment,
    'CommentDate' : timeNow,
    'PostID' : PostID
  };
  mysql.query(query, comment, function(err, rows, fields) {
    if (err) console.warn(err);
    callback({'status': true});
  });
}
function getComments(Limit, From, PostID, callback){
  if(Limit > 0)
  {
    if(From > 0)
    {
      var query = "SELECT * FROM comment WHERE CommentDeletedDate IS NULL AND PostID="+PostID+" ORDER BY PostDate desc LIMIT " + From + ", " + Limit;
      mysql.query(query, function(err, rows, fields) {
        if (err) console.warn(err);
        callback(rows);
      });
    }
    else
    {
      var query = "SELECT * FROM comment WHERE CommentDeletedDate IS NULL AND PostID="+PostID+" ORDER BY PostDate desc LIMIT " + Limit;
      mysql.query(query, function(err, rows, fields) {
        if (err) console.warn(err);
        callback(rows);
      });
    }
  }
  else
  {
    var query = "SELECT * FROM comment WHERE CommentDeletedDate IS NULL AND PostID="+PostID+" ORDER BY PostDate desc";
    mysql.query(query, function(err, rows, fields) {
      if (err) console.warn(err);
      callback(rows);
    });
  }
}
function deleteComment(CommentID, callback){
  var query = "UPDATE comment SET ? WHERE CommentID = " + CommentID;
  var timeNow = new Date();
  timeNow = timeNow.toISOString().replace(/T/, ' ').replace(/\..+/, '');
  var comment =
  {
    'CommentDeletedDate' : timeNow
  };
  mysql.query(query, comment, function(err, rows, fields) {
    if (err) console.warn(err);
    callback({'status': true});
  });
}
function updateComment(CommentID, Comment, callback){
  var query = "UPDATE comment SET ? WHERE CommentID = " + CommentID;
  var comment =
  {
    'Comment' : Comment
  };
  mysql.query(query, comment, function(err, rows, fields) {
    if (err) console.warn(err);
    callback({'status': true});
  });
}
