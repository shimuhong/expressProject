var express = require('express');
var mysql = require('mysql');
var router = express.Router();

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

var sql = 'select * from runoob_tbl';
var rsData = '';
  

// console.log('===', rsData)
/* GET home page. */
router.get('/api1', function(req, res, next) {
  // res.render('index', { title: 'Express11' });
  connection.query(sql, function(err, result) {
    if (err) {
      console.log('[SELECT ERROR]：', err.message);
    }
    rsData = JSON.stringify(result)
    console.log('==', rsData);
    console.log(result);
    res.send({data: result});
  })

});
router.get('/api2', function(req, res, next) {
  res.send('respond with a resource222');
});
router.post('/api3', function(req, res, next) {
  console.log('==api3 req:', req.body)
  res.send({data: req.body});
  // res.send('asdadasdas');
});
module.exports = router;
