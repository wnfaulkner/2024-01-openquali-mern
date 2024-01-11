// USERS ROUTER

const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken); // GET /api/users/check-token

router.post('/', usersCtrl.create); // POST /api/users

router.post('/login', (req, res) => {
  //console.log('Received login request at:', req.originalUrl);
  usersCtrl.login(req, res);
});

module.exports = router;