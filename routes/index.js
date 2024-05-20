var express = require('express');
var router = express.Router();
const userRouter = require('./users');
const attendanceRouter = require('./attendances');

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.use('/users', userRouter);
router.use('/attendances', attendanceRouter);

module.exports = router;
