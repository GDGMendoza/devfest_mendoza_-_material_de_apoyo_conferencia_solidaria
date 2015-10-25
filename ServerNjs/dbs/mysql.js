/**
* Created by leo@GDGMendoza on 05/09/2015.
*/
var mysqlconn = require('mysql');
var defaultPool = {};
defaultPool.config =
{
  host : '127.0.0.1',
  port : '3306',
  user: 'root',
  password: 'root',
  database: 'serverGDG'
};
defaultPool.pool = mysqlconn.createPool(defaultPool.config);
defaultPool.query = query;
module.exports.closeConnection = closeConnection;
module.exports.query = defaultPool.query;

function query(query, params, callback)
{
  if(params != undefined && params != null)
  {
    defaultPool.pool.getConnection(function(err, connection){
      if(err) console.warn(err);
      connection.query(
        query,
        params,
        function(err, rows, fields){
          callback(err, rows, fields);
          connection.release();
        }
      );
    });
  }
  else
  {
    defaultPool.pool.getConnection(function(err, connection){
      if(err) console.warn(err);
      connection.query(
        query,
        function(err, rows, fields){
          callback(err, rows, fields);
          connection.release();
        }
      );
    });
  }
}

function closeConnection(){
  var errorList = "";
  defaultPool.pool.end(function (err) {
    // all connections in the pool cluster have ended
    errorList += err;
  });
    if(!_.isEmpty(errorList)) {
      console.warn('mysqlClosed with errors: ' + errorList);
    }else{
      console.log('mysqlClosed');
    }
}
