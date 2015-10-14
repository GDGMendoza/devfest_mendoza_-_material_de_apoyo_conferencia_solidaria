/**
 * Created by leo@GDGMendoza on 05/09/2015.
 */
var mysql = require('./../dbs/mysql');

var createPost = function(PostTitle,PostText,callback){
    //var query = 'INSERT INTO post (PostTitle,PostText,PostDate) values (?,?,?)';
    var query = 'INSERT INTO post SET ?';
    var timeNow = new Date();
    timeNow = timeNow.toISOString().replace(/T/, ' ').replace(/\..+/, '');
    var post =
    {
        'PostTitle': PostTitle,
        'PostText' : PostText,
        'PostDate' : timeNow
    };
    mysql.query(query, post, function(err, rows, fields) {
        if (err) console.warn(err);
        callback({'status': true});
    });
};

var getPosts = function(Limit, From, callback){
    //var query = 'INSERT INTO post (PostTitle,PostText,PostDate) values (?,?,?)';
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
};

var getPost = function(PostID, callback){
    //var query = 'INSERT INTO post (PostTitle,PostText,PostDate) values (?,?,?)';
    var query = "SELECT * FROM post WHERE PostDeletedDate IS NULL AND PostID = " + PostID;
    mysql.query(query, function(err, rows, fields) {
        if (err) console.warn(err);
        callback(rows);
    });
};

var deletePost = function(PostID, callback){
    //var query = 'INSERT INTO post (PostTitle,PostText,PostDate) values (?,?,?)';
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
};

var updatePost = function(PostID, PostTitle, PostText, callback){
    //var query = 'INSERT INTO post (PostTitle,PostText,PostDate) values (?,?,?)';
    var query = "UPDATE post SET ? WHERE PostID = " + PostID;
    var post =
    {
        'PostTitle': PostTitle,
        'PostText' : PostText
    };
    mysql.query(query, post, function(err, rows, fields) {
        if (err) console.warn(err);
        callback({'status': true});
    });
};

exports.createPost = createPost;
exports.getPosts = getPosts;
exports.getPost = getPost;
exports.deletePost = deletePost;
exports.updatePost = updatePost;