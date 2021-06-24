var express = require('express');
// var mysql = require('mysql');
var router = express.Router();
/*
// 创建连接mysql配置
var connection = mysql.createConnection({
  host: '127.0.0.1', //数据库地址
  port: '3306',//端口号
  user: 'root',//用户名
  password: '12345678',//密码
  database: 'shimh'//数据库名称
});
// // 建立连接
connection.connect();


  
function querySQL(sql) {
  return new Promise((resolve, reject)=> {
    var rsData = '';
    connection.query(sql, function(err, result) {
      if (err) {
        console.log('[SELECT ERROR]：', err.message);
        reject(err)
      }
      rsData = JSON.stringify(result)
      console.log('data:', rsData);
      resolve(result)
    })
  })
}
*/
/* GET home page. */
/*
router.get('/api1', function(req, res, next) {
  // res.render('index', { title: 'Express11' });
  querySQL('select * from runoob_tbl').then((data)=> {
    res.send({data});
  })



});
*/
router.get('/api2', function(req, res, next) {
  console.log('==get query:', req.query)
  res.send(req.query);
});
router.post('/api3', function(req, res, next) {
  console.log('==post body:', req.body)
  res.send(req.body);
  // res.send('asdadasdas');
});
module.exports = router;
