var express = require('express');
var router = express.Router();
const attendanceService = require('../services/attendance.service');

router.get('/', async function (req, res, next) {
  const data = await attendanceService.getAll();
  res.render('attendances', {
    title: 'Lịch sử chấm công',
    js: 'attendance.js',
    data,
  });
});

module.exports = router;
