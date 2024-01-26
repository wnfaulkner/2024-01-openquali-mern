// FILES ROUTER

const express = require('express');
const router = express.Router();
const filesCtrl = require('../controllers/api/files');

router.post('/upload', (req, res) => {
  filesCtrl.upload(req, res);
});

module.exports = router;