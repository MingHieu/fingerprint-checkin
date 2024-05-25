var express = require('express');
var router = express.Router();
const userService = require('../services/user.service');
const client = require('../queue/mqtt');

router.get('/', async function (req, res, next) {
  const data = await userService.getAll();
  res.render('users', {
    title: 'Danh sách nhân viên',
    data,
  });
});

router.get('/create', function (req, res, next) {
  res.render('create-user', {
    title: 'Tạo nhân viên',
    js: 'create-user.js',
  });
});

router.post('/create', async function (req, res, next) {
  await userService.create(req.body);
  res.redirect('/users');
});

router.get('/create-fingerprint', async function (req, res, next) {
  const count = await userService.count();
  client.publish(
    'ptit-iot-fingerprint-checkin',
    JSON.stringify({
      type: 'create',
      id: count + 1,
    })
  );
  res.send();
});

module.exports = router;
