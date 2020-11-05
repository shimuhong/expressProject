var express = require('express');
var mysql = require('mysql');
var router = express.Router();

// 创建连接mysql配置
// var connection = mysql.createConnection({
//   host: '127.0.0.1', //数据库地址
//   port: '3306',//端口号
//   user: 'root',//用户名
//   password: '123456',//密码
//   database: 'navicatMysql'//数据库名称
// });
// // 建立连接
// connection.connect();

// var sql = 'SELECT * FROM `db`';
// var rsData = '';
// // setTimeout(()=> {
//   console.log('111111');
//   connection.query(sql, function(err, result) {
//     if (err) {
//         console.log('[SELECT ERROR]：', err.message);
//     }
//     rsData = JSON.stringify(result)
//     console.log('==', rsData);
//     console.log(result);
//   })
// // }, 3000)

// console.log('===', rsData)
/* GET home page. */
router.get('/api1', function(req, res, next) {
  // res.render('index', { title: 'Express11' });
  console.log('==api1 req:', req.query)
  res.send({data: req.query});
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
