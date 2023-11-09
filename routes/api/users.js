// users router

const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');

// POST /api/users
router.post('/', usersCtrl.create);

router.post('/login', (req, res) => {
  //console.log('Received login request at:', req.originalUrl);
  usersCtrl.login(req, res);
});

module.exports = router;